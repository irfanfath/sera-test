import axios from 'axios';
import { API_URL, CONFIG_HEADER_DEMO } from './_base';

/**
 *
 * @param {object} payload
 * @param {string} payload.image
 * @param {string} payload.socket_id
 *
 * @return {Promise<resolve, reject>}
 */
export const apiOCRExtract = (payload: any) =>
  axios.post(
    `${API_URL}/api/order/v1.2/ocr_extract`,
    payload,
    CONFIG_HEADER_DEMO
  );

/**
 *
 * @param {object} payload
 * @param {string} payload.image
 * @param {string} payload.socket_id
 * @param {string} payload.list_of_words
 * @param {string} payload.threshold
 *
 * @return {Promise<resolve, reject>}
 */
export const apiOCRMatch = (payload: any) =>
  axios.post(
    `${API_URL}/api/order/v1.2/ocr_match`,
    payload,
    CONFIG_HEADER_DEMO
  );

/**
 *
 * @param {object} payload
 * @param {string} payload.image
 * @param {string} payload.socket_id
 *
 * @return {Promise<resolve, reject>}
 */
export const apiOCR = (payload: any) =>
  axios.post(`${API_URL}/api/order/v1.2/ocr`, payload, CONFIG_HEADER_DEMO);

/**
 *
 * @param {object} payload
 * @param {string} payload.image
 * @return {Promise<resolve, reject>}
 */
 export const apiPlatExtraction = (payload: any) =>
 axios.post(`${API_URL}/api/order/v2.1/license_plate_recognition`, payload, CONFIG_HEADER_DEMO);

 /**
 *
 * @param {object} payload
 * @param {string} payload.image
 * @param {string} payload.socket_id

 * @return {Promise<resolve, reject>}
 */
  export const apiPlatExtractionAnalytics = (payload: any) =>
  axios.post(`${API_URL}/api/result/v2.1/analytics`, payload, CONFIG_HEADER_DEMO);
