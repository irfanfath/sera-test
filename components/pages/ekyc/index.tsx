/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useRef, useCallback, useEffect } from 'react';
import io from 'socket.io-client';
import { SOCKET_URL } from 'api/_base';
import { putGeneratePipeLine, putFaceLiveness, putNationalID } from 'api/ekyc';
import { Modal } from 'components/elements';
import EKYCSidebar from './sidebar';
import EKYCPipeline from './pipeline';
import EKYCCamera from './camera';
import EKYCPipelineIntro from './pipeline-intro';
import PipelineDummy from './pipeline-dummy.json';
import IconCamera from 'public/svg/icon-camera.svg';

interface IDataPipeline {
  id: number;
  type: string;
  title: string;
  sub_title: string;
  image_guide: string;
  pose: string;
}

const initDataPipeline: IDataPipeline = {
  id: 0,
  type: '',
  title: '',
  sub_title: '',
  image_guide: '',
  pose: '',
};

interface IResultAnalytic {
  message: string;
  result: [] | null;
  transaction_id: string;
  verified: boolean;
  states: { next: string; current: string };
}

const InitResultAnalytic: IResultAnalytic = {
  message: '',
  result: null,
  transaction_id: '',
  verified: false,
  states: { next: '', current: '' },
};

const initNotif = {
  isShow: false,
  type: '',
  message: '',
};

const EKYCShowcase: FC = () => {
  const [notif, setNotif] = useState(initNotif);
  const [socketID, setSocketID] = useState('');
  const [dataPipeline, setDataPipeline] = useState(initDataPipeline);
  const [resultAnalytic, setresultAnalytic] = useState(InitResultAnalytic);
  const [loading, setLoading] = useState(false);
  const [imgReview, setImgReview] = useState('');
  const webcamRef: any = useRef(null);

  const handleCapture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot({
      width: 1920,
      height: 1080,
    });
    setImgReview(imageSrc);
    handleTakePhoto(imageSrc);
  }, [socketID, dataPipeline, webcamRef, setImgReview]);

  const handleRunSocket = async () => {
    const socket = await io(SOCKET_URL, {
      reconnection: true,
      reconnectionDelayMax: 50000,
      autoConnect: true,
    });

    if (socket) {
      socket.on('connect', () => {
        setSocketID(socket.id);
        const client = io(`${SOCKET_URL}/${socket.id}`, {
          reconnection: true,
          reconnectionDelayMax: 50000,
          autoConnect: true,
        });

        client.on('analytics', (data) => {
          const result = JSON.parse(data);
          setresultAnalytic(result);
          setLoading(false);
          console.log('socket analytics :', result);
        });
      });

      socket.on('disconnect', () => {
        console.log('Disconnect to server');
      });
    }
  };

  useEffect(() => {
    handleRunSocket();
  }, []);

  const handleStartLiveness = async (e: any) => {
    e.preventDefault();
    await putGeneratePipeLine({ socket_id: socketID })
      .then((res) => {
        const getCurrentPipeline = PipelineDummy.filter(
          (data) => data.type === res.data.pipeline[0]
        );
        setDataPipeline(getCurrentPipeline[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const base64toBlob = async (dataBase64: any) => {
    const splitDataURI = await dataBase64.split(',');
    const byteString =
      splitDataURI[0].indexOf('base64') >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  };

  const handleTakePhoto = (imgParam: string) => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(async () => {
        setLoading(true);
        const formData = new FormData();
        const imageBlob = await base64toBlob(imgParam);
        formData.append('image', imageBlob, 'image.jpg');
        formData.append('socket_id', socketID);
        console.log(dataPipeline.type);
        if (dataPipeline.type === 'national-id') {
          await putNationalID(formData);
        } else {
          await putFaceLiveness(formData);
        }
      })
      .catch((err) => {
        setNotif({
          isShow: true,
          type: 'error',
          message: err.message,
        });
      });
  };

  const handleNextStep = (e: any) => {
    e.preventDefault();
    const nextPipeline = resultAnalytic.states.next;
    const getCurrentPipeline = PipelineDummy.filter(
      (data) => data.type === nextPipeline
    );
    setDataPipeline(getCurrentPipeline[0]);
    setresultAnalytic(InitResultAnalytic);
    setImgReview('');
  };

  const handleRetakePhoto = (e: any) => {
    e.preventDefault();
    setImgReview('');
    setresultAnalytic(InitResultAnalytic);
  };

  return (
    <div className="ekyc">
      <EKYCSidebar title={dataPipeline.title} />
      <div className="ekyc__showcase">
        <div className="ekyc__showcase__header">
          <h1>Show Cases e-KYC</h1>
        </div>
        <div className="ekyc__showcase__body">
          <EKYCCamera
            dataPipeline={dataPipeline}
            handleCapture={handleCapture}
            imgReview={imgReview}
            webcamRef={webcamRef}
          />

          {dataPipeline.type ? (
            <EKYCPipeline
              handleNextStep={handleNextStep}
              handleRetakePhoto={handleRetakePhoto}
              loading={loading}
              dataPipeline={dataPipeline}
              resultAnalytic={resultAnalytic}
            />
          ) : (
            <EKYCPipelineIntro onClick={handleStartLiveness} />
          )}

          {!imgReview && dataPipeline.type ? (
            <div className="ekyc__takephoto-mobile w-full">
              <button
                className="button w-full"
                onClick={handleCapture}
                data-cy="eky-button-photo-mobile"
              >
                <IconCamera /> &nbsp; Take a shoot
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>

      {notif.type === 'error' && (
        <Modal show={notif.isShow}>
          <div className="text-center">
            <h1 className="modal__title">Camera Blocked</h1>
            <p>{notif.message}</p>
            <div className="modal__button">
              <button
                className="button w-full"
                data-cy="modal-close"
                onClick={() => setNotif(initNotif)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EKYCShowcase;
