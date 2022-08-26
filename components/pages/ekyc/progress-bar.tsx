import { FC } from 'react';

const EKYProgressBar: FC = () => {
  return (
    <div className="ekyc__showcase__loading">
      <span className="ekyc__showcase__loading__text">
        <span>Processing</span>
        <span>55%</span>
      </span>
      <span className="ekyc__showcase__loading__progress">
        <span style={{ width: '55%' }}></span>
      </span>
      <span>( Mohon tunggu beberapa detik )</span>
    </div>
  );
};
export default EKYProgressBar;
