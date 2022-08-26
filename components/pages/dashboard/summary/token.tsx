import { FC, useState, useEffect } from 'react';
import copy from 'clipboard-copy';
import { Notification } from 'components/elements';
import { postRefreshToken } from 'api/dashboard';

interface IAuth {
  token: string;
  login_time: string;
  expires_in: string;
  refresh_expires_in: string;
  refresh_token: string;
}

interface IDashboardSummaryToken {
  auth: IAuth;
}

const initNotif = {
  type: '',
  message: '',
};

const DashboardSummaryToken: FC<IDashboardSummaryToken> = ({ auth }) => {
  const [notif, setNotif] = useState(initNotif);
  const [accessToken, setAccessToken] = useState(auth.token);
  const [refreshToken, setRefreshToken] = useState(auth.refresh_token);

  const handleGenerateToken = async () => {
    try {
      await postRefreshToken({
        refresh_token: auth.refresh_token,
      }).then((res) => {
        setAccessToken(res.data.result.token);
        setRefreshToken(res.data.result.refresh_token);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (notif.type) {
      const timeOut = setTimeout(() => setNotif(initNotif), 3000);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [notif]);

  const handleCopyToken = () => {
    copy(accessToken);
    setNotif({
      type: 'token',
      message: 'Token Copied',
    });
  };

  const handleCopyRefreshToken = () => {
    copy(refreshToken);
    setNotif({
      type: 'refresh-token',
      message: 'Refresh Token Copied',
    });
  };

  return (
    <div className="dashboard__frame" data-cy="dashboard-summary-token">
      <h2>e-KYC Token</h2>
      <p>
        Token and refresh token have expiration time. <br />
        once the expired, you need to generate new token.
      </p>
      <div className="dashboard__card">
        <div className="dashboard__token">
          <div className="dashboard__token-field">
            <span>Status</span>
            <div className="dashboard__token-generate">
              <div className="dashboard__token-input">
                <span className="text-success">
                  <b>Active</b>
                </span>
              </div>
              <button
                className="button button--green"
                onClick={handleGenerateToken}
              >
                Generate
              </button>
            </div>
          </div>

          <div className="dashboard__token-field">
            <span>
              Token &nbsp; &nbsp;
              <small className="text-success">
                Expired on
                {new Date(
                  parseInt(auth.login_time) - parseInt(auth.expires_in)
                ).toString()}
              </small>
            </span>
            <div className="dashboard__token-generate">
              <input
                type="password"
                className="dashboard__token-input"
                defaultValue={accessToken}
              />
              <button className="button button--gray" onClick={handleCopyToken}>
                Copy
              </button>
            </div>
          </div>

          <div className="dashboard__token-field">
            <span>
              Refresh Token &nbsp; &nbsp;
              <small className="text-danger">
                Expired on &nbsp;
                {new Date(
                  parseInt(auth.login_time) - parseInt(auth.refresh_expires_in)
                ).toString()}
              </small>
            </span>
            <div className="dashboard__token-generate">
              <input
                type="password"
                className="dashboard__token-input"
                defaultValue={refreshToken}
              />
              <button
                className="button button--gray"
                onClick={handleCopyRefreshToken}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
      {notif.type === 'token' && <Notification content={notif.message} />}
      {notif.type === 'refresh-token' && (
        <Notification content={notif.message} />
      )}
    </div>
  );
};

export default DashboardSummaryToken;
