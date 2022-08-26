import { FC } from 'react';
import Image from 'next/image';
import EKYProgressBar from './progress-bar';

interface IShowcase {
  handleNextStep: (e: any) => void;
  handleRetakePhoto: (e: any) => void;
  loading: boolean;
  dataPipeline: any;
  resultAnalytic: any;
}

const EKYCPipeline: FC<IShowcase> = ({
  handleNextStep,
  handleRetakePhoto,
  loading,
  dataPipeline,
  resultAnalytic,
}) => {
  return (
    <div className="ekyc__showcase__content">
      <h1>{dataPipeline.title}</h1>
      <h2>{dataPipeline.sub_title}</h2>
      <small>( Cocokan wajah dengan safe area yang tersedia )</small>

      {!loading && !resultAnalytic.verified ? (
        <div className="ekyc__showcase__content__img_guide">
          <Image
            src={dataPipeline.image_guide}
            alt={dataPipeline.type}
            width="425"
            height="107"
          />
        </div>
      ) : (
        ''
      )}

      {loading && <EKYProgressBar />}

      {/* if verification processing non KTP */}
      {resultAnalytic.results && dataPipeline.type !== 'national-id' ? (
        <div className="ekyc__showcase__content__result">
          <h4>Detection Result :</h4>
          <ul>
            <li>
              <span>Pose</span>
              <span>
                : <span>{dataPipeline.pose}</span>
              </span>
            </li>
            <li>
              <span>Status</span>
              <span>
                :{' '}
                {resultAnalytic.verified ? (
                  <span className="text-success">Verified</span>
                ) : (
                  <span className="text-danger">Not Verified</span>
                )}
              </span>
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}

      {/* if verification processing KTP */}
      {resultAnalytic.results && dataPipeline.type == 'national-id' ? (
        <div className="ekyc__showcase__content__result">
          <h4>Detection Result :</h4>
          <ul>
            <li>
              <span>NIK</span>
              <span>
                : <span>{resultAnalytic.results[0]?.nik}</span>
              </span>
            </li>
            <li>
              <span>Name</span>
              <span>
                : <span>{resultAnalytic.results[0]?.nama}</span>
              </span>
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}

      {resultAnalytic.verified && (
        <button
          className="button w-full"
          onClick={handleNextStep}
          data-cy="eky-button-confirm"
        >
          Confirm and Continue
        </button>
      )}

      {!resultAnalytic.verified && resultAnalytic.results ? (
        <button
          className="button w-full"
          onClick={handleRetakePhoto}
          data-cy="eky-button-retake"
        >
          Retake
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default EKYCPipeline;
