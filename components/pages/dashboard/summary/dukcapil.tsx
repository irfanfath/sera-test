import { Fragment, FC, useState, useEffect } from "react";
import Image from "next/image";
import { getDataDukcapil } from "api/dashboard";

interface IDataDukcapil {
  ducapil_hit: number;
  ducapil_rate: number;
  ducapil_rate_face: number;
  ducapil_rate_nik: number;
}

const DashboardSummaryDukcapil: FC = () => {
  const [dataDukcapil, setDataDukcapil] = useState<IDataDukcapil>();

  const handleRequestApi = async () => {
    await getDataDukcapil()
      .then((res) => {
        setDataDukcapil(res.data);
      })
      .catch((err) => {
        console.log("setDataDukcapil", err);
      });
  };

  useEffect(() => {
    handleRequestApi();
  }, []);

  return (
    <Fragment>
      <h2>Dukcapil Services</h2>
      <div className='dashboard__frame' data-cy='dashboard-summary-dukcapil'>
        <div className='dashboard__main-row'>
          <div className='dashboard__main-quarter'>
            <div className='dashboard__card'>
              <div className='dashboard__counter'>
                <div className='dashboard__counter-icon'>
                  <Image
                    src='/svg/icon-dashboard-hit.svg'
                    alt='Total Hit API'
                    width='48'
                    height='48'
                  />
                </div>
                <div className='dashboard__counter-text'>
                  <span>Total Hit API</span>
                  <span className='text-danger'>
                    {dataDukcapil?.ducapil_hit || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='dashboard__main-quarter'>
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
                    {dataDukcapil?.ducapil_rate || 0} %
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='dashboard__main-quarter'>
            <div className='dashboard__card'>
              <div className='dashboard__counter'>
                <div className='dashboard__counter-icon'>
                  <Image
                    src='/svg/icon-dashboard-face.svg'
                    alt='Face Verification Rate'
                    width='48'
                    height='48'
                  />
                </div>
                <div className='dashboard__counter-text'>
                  <span>Face Verification Rate</span>
                  <span className='text-success'>
                    {dataDukcapil?.ducapil_rate_face || 0} %
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='dashboard__main-quarter'>
            <div className='dashboard__card'>
              <div className='dashboard__counter'>
                <div className='dashboard__counter-icon'>
                  <Image
                    src='/svg/icon-dashboard-nik.svg'
                    alt='NIK Verification Rate'
                    width='48'
                    height='48'
                  />
                </div>
                <div className='dashboard__counter-text'>
                  <span>NIK Verification Rate</span>
                  <span className='text-success'>
                    {dataDukcapil?.ducapil_rate_nik || 0} %
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

export default DashboardSummaryDukcapil;
