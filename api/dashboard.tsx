import axios from 'axios';
import { API_URL, CONFIG_HEADER } from './_base';

/**
 *
 * @return {Promise<resolve, reject>}
 */
export const getDataOCR = () =>
  axios.get(`${API_URL}/getdataocr`, CONFIG_HEADER);

/**
 *
 * @return {Promise<resolve, reject>}
 */
export const getDataFR = () => axios.get(`${API_URL}/getdatafr`, CONFIG_HEADER);

/**
 *
 * @return {Promise<resolve, reject>}
 */
export const getDataDukcapil = () =>
  axios.get(`${API_URL}/getdatadukcapil`, CONFIG_HEADER);

/**
 *
 * @return {Promise<resolve, reject>}
 */
export const postRefreshToken = (refresh_token: any) =>
  axios.post(`${API_URL}/api/user/token/refresh`, refresh_token);

/**
 *
 * @param {string} api
 * @param {string} date
 * @param {string} type
 * @param {string} page
 *
 * @return {Promise<resolve, reject>}
 */
export const getDataLog = ({ api = '', date = '', type = '', page = 1, size = 20 }) =>
  axios.get(
    `${API_URL}/api/dashboard/developer-logs?api=${api}&date=${date}&type=${type}&page=${page}&size=${size}`,
    CONFIG_HEADER
  );

// export const getDataLog = ({ api = '', date = '', type = '', page = 1 }) =>
//   axios.get(
//     `${API_URL}/api/dashboard/developer-logs?api=${api}&date=${date}&type=${type}&page=${page}}`,
//   CONFIG_HEADER
//   );

export const getListApiDeveloperLog = () =>
  axios.get(`${API_URL}/api/dashboard/developer-logs/list-api`, CONFIG_HEADER);
