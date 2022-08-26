import { Fragment, FC } from 'react';
import DashboardSummaryToken from './token';
import DashboardSummaryOCR from './ocr';
import DashboardSummaryFR from './fr';
import DashboardSummaryDukcapil from './dukcapil';

interface IAuth {
  token: string;
  login_time: string;
  expires_in: string;
  refresh_expires_in: string;
  refresh_token: string;
}

interface IDashboardSummary {
  auth: IAuth;
}

const DashboardSummary: FC<IDashboardSummary> = ({ auth }) => {
  return (
    <Fragment>
      <div className="dashboard__main-row" data-cy="dashboard-summary">
        <div className="dashboard__main-half">
          <DashboardSummaryToken auth={auth} />
        </div>
        <div className="dashboard__main-half">
          <DashboardSummaryOCR />
          <DashboardSummaryFR />
        </div>
      </div>
      <DashboardSummaryDukcapil />
    </Fragment>
  );
};

export default DashboardSummary;
