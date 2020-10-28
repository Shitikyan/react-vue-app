import mockApi from './api.mock';
import webApi from './api.client';

/**
 * If MOCK_WEB_API is true mock api is used based on ./mock/mock.data.json.
 * Otherwise we api used.
 */
const api = process.env.VUE_APP_MOCK_WEB_API == 'true' ? mockApi : webApi;

export default {
  api,
  get: (...args) => api('get', ...args),
  post: (...args) => api('post', ...args),
  put: (...args) => api('put', ...args),
  patch: (...args) => api('patch', ...args),
  delete: (...args) => api('delete', ...args),
};
