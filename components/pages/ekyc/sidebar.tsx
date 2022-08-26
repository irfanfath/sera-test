import { FC } from 'react';
import StepLiveness from 'public/ekyc/step-liveness.svg';
import StepLivenessActive from 'public/ekyc/step-liveness-active.svg';
import StepVeriticationKTP from 'public/ekyc/step-verification-ktp.svg';
import StepVeriticationKTPActive from 'public/ekyc/step-verification-ktp-active.svg';
import StepFinish from 'public/ekyc/step-finish.svg';
import StepFinishActive from 'public/ekyc/step-finish.svg';

const EKYCSidebar: FC<{ title?: string }> = ({ title }) => {
  return (
    <div className="ekyc__aside">
      <h2>Step Process</h2>
      <div className={title === 'Step 1' ? 'ekyc__step active' : 'ekyc__step'}>
        {title === 'Step 1' ? <StepLivenessActive /> : <StepLiveness />}
        <span>Liveness</span>
      </div>
      <div className={title === 'Step 2' ? 'ekyc__step active' : 'ekyc__step'}>
        {title === 'Step 2' ? (
          <StepVeriticationKTPActive />
        ) : (
          <StepVeriticationKTP />
        )}
        <span>Verify KTP</span>
      </div>
      <div className={title === 'Step 3' ? 'ekyc__step active' : 'ekyc__step'}>
        {title === 'Step 3' ? <StepFinishActive /> : <StepFinish />}
        <span>Finish</span>
      </div>
    </div>
  );
};

export default EKYCSidebar;
