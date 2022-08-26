import { Fragment, FC, useState, useEffect } from "react";
import Image from "next/image";
import { getDataOCR } from "api/dashboard";

interface IDataOCR {
  total_ocr: number;
  success_rate_ocr: number;
}

const DashboardSummaryOCR: FC = () => {
  const [dataOCR, setDataOCR] = useState<IDataOCR>();

  const handleRequestApi = async () => {
    await getDataOCR()
      .then((res) => {
        setDataOCR(res.data);
      })
      .catch((err) => {
        console.log("getDataOCR", err);
      });
  };

  useEffect(() => {
    handleRequestApi();
  }, []);

  return (
    <Fragment>
      <h2>OCR</h2>
      <div className='dashboard__frame' data-cy='dashboard-summary-ocr'>
        <div className='dashboard__main-row'>
          <div className='dashboard__main-half'>
            <div className='dashboard__card'>
              <div className='dashboard__counter'>
                <div className='dashboard__counter-icon'>
                  <Image
                    src='/svg/icon-dashboard-hit.svg'
                    alt='Total Hit API OCR'
                    width='48'
                    height='48'
                  />
                </div>
                <div className='dashboard__counter-text'>
                  <span>Total Hit API</span>
                  <span className='text-danger'>{dataOCR?.total_ocr || 0}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='dashboard__main-half'>
            <div className='dashboard__card'>
              <div className='dashboard__counter'>
                <div className='dashboard__counter-icon'>
                  <Image
                    src='/svg/icon-dashboard-hit-success.svg'
                    alt='Successful Hit Rate'
                    width='48'
                    height='48'
                  />
                </div>
                <div className='dashboard__counter-text'>
                  <span>Successful Hit Rate</span>
                  <span className='text-success'>
                    {dataOCR?.success_rate_ocr} %
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardSummaryOCR;
