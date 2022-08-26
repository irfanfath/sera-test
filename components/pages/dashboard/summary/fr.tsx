import { Fragment, FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { getDataFR } from 'api/dashboard';

interface IDataFR {
  total_fr: number;
  success_rate_fr: number;
}

const initDataFR: IDataFR = {
  total_fr: 0,
  success_rate_fr: 0,
};

const DashboardSummaryFR: FC = () => {
  const [dataFR, setDataFR] = useState(initDataFR);

  const handleRequestApi = async () => {
    try {
      const dataFR = await getDataFR();
      if (!dataFR) {
        throw new Error('No FR data found');
      }
      console.log('try', dataFR);
      // setDataFR(dataFR.res.data);
    } catch (error) {
      setDataFR(initDataFR);
    }

    await getDataFR()
      .then((res) => {
        setDataFR(res.data);
      })
      .catch((err) => {
        console.log('getsetDataFR', err);
      });
  };

  useEffect(() => {
    handleRequestApi();
  }, []);

  return (
    <Fragment>
      <h2>Face Liveness</h2>
      <div className="dashboard__frame" data-cy="dashboard-summary-fr">
        <div className="dashboard__main-row">
          <div className="dashboard__main-half">
            <div className="dashboard__card">
              <div className="dashboard__counter">
                <div className="dashboard__counter-icon">
                  <Image
                    src="/svg/icon-dashboard-hit.svg"
                    alt="Total Hit API"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="dashboard__counter-text">
                  <span>Total Hit API</span>
                  <span className="text-danger">{dataFR?.total_fr || 0}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard__main-half">
            <div className="dashboard__card">
              <div className="dashboard__counter">
                <div className="dashboard__counter-icon">
                  <Image
                    src="/svg/icon-dashboard-hit-success.svg"
                    alt="Successful Hit Rate"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="dashboard__counter-text">
                  <span>Successful Hit Rate</span>
                  <span className="text-success">
                    {dataFR?.success_rate_fr || 0} %
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

export default DashboardSummaryFR;
