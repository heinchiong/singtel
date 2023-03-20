/**
 * import packages
 */
import axios from 'axios';

export function getHttpData(url: string, headers = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url, {
        headers: {
          ...headers,
      }});
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
}

export function postHttpData(url: string, data: any, headers = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(url, data, {
        headers: {
          ...headers,
        },
      });
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
}