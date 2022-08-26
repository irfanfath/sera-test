import { FC } from 'react';

interface IIntro {
  onClick: (e: any) => void;
}

const EKYCPipelineIntro: FC<IIntro> = ({ onClick }) => {
  return (
    <div className="ekyc__showcase__content">
      <h1>Hi, Welcome!</h1>
      <h2>Try our e-KYC with these features:</h2>
      <ul>
        <li>Liveness Detection</li>
        <li>OCR</li>
        <li>Dukcapil Verification</li>
      </ul>
      <button
        className="button w-full"
        onClick={onClick}
        data-cy="eky-button-intro"
      >
        Let&apos;s Go
      </button>
    </div>
  );
};

export default EKYCPipelineIntro;
