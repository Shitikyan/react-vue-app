import axios from 'axios';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

const defaults = {
  baseURL: process.env.API_BASE_URL || 'http://localhost:3001',
  headers: () => ({
    'Content-Type': 'application/json',
  }),
  error: {
    code: 'INTERNAL_ERROR',
    message: 'Something went wrong. Please check your internet connection or contact our support.',
    status: 503,
    data: {},
  },
};

/**
 * Web api client.
 */
const clientApi = (method, url, variables) =>
  new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      data: method !== 'get' && method !== 'delete' ? variables : undefined,
      params: method === 'get' ? variables : undefined,
    }).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        reject(error.response.data);
      });
    });

export default clientApi;
