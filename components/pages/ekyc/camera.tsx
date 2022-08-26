import { FC } from "react";
import Image from "next/image";
import Webcam from "react-webcam";
import IconCamre from "public/svg/icon-camera.svg";

interface ICamera {
  dataPipeline: any;
  imgReview: string;
  webcamRef: any;
  handleCapture: (e: any) => void;
}

const EKYCCamera: FC<ICamera> = ({
  dataPipeline,
  imgReview,
  webcamRef,
  handleCapture,
}) => {
  return (
    <div className='ekyc__showcase__camera'>
      {dataPipeline.type ? (
        imgReview ? (
          <Image src={imgReview} height='1080' width='1920' alt='preview' />
        ) : (
          <div>
            <div className='ekyc__showcase__camera__frame'>
              <Webcam
                mirrored={dataPipeline.type == "national-id" ? false : true}
                audio={false}
                ref={webcamRef}
                screenshotFormat='image/jpeg'
                height='500'
              />
              <div
                className={
                  dataPipeline.type == "national-id"
                    ? "ekyc__showcase__camera__frame__shadow ktp"
                    : "ekyc__showcase__camera__frame__shadow"
                }
              ></div>
            </div>
            <button
              className='button w-full'
              onClick={handleCapture}
              data-cy='eky-button-photo'
            >
              <IconCamre /> &nbsp; Take a shoot
            </button>
          </div>
        )
      ) : (
        <Image
          src='/ekyc/on-boarding.png'
          alt='Face Recognition Technology'
          width='355'
          height='408'
        />
      )}
    </div>
  );
};

export default EKYCCamera;
