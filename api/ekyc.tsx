import axios from 'axios';
import { API_URL, CONFIG_HEADER_DEMO } from './_base';

/**
 *
 * @param {string} payload
 * @param {string} payload.image
 * @param {string} payload.socket_id
 *
 * @return {Promise<resolve, reject>}
 */
export const putGeneratePipeLine = (payload: any) =>
  axios.put(`${API_URL}/api/order/ekyc/pipeline`, payload, CONFIG_HEADER_DEMO);

/**
 *
 * @param {string} payload
 * @param {string} payload.image
 * @param {string} payload.socket_id
 *
 * @return {Promise<resolve, reject>}
 */
export const putFaceLiveness = (payload: any) =>
  axios.put(
    `${API_URL}/api/order/ekyc/face/liveness`,
    payload,
    CONFIG_HEADER_DEMO
  );

/**
 *
 * @param {string} payload
 * @param {string} payload.image
 * @param {string} payload.socket_id
 *
 * @return {Promise<resolve, reject>}
 */
export const putNationalID = (payload: any) =>
  axios.put(
    `${API_URL}/api/order/ekyc/ocr/national-id`,
    payload,
    CONFIG_HEADER_DEMO
  );
