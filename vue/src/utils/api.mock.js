import { random, values } from 'lodash';
import mock from './mock';

/**
 * Web api mock.
 */
const mockApi = (method, url, variables) => {
  return new Promise((resolve) => {
    // Imitate request 
    setTimeout(() => {
      resolve(
        mock()[
        method
          .concat(url)
          .concat(values(variables).some((x) => x) && values(variables.params).some((x) => x) ? '?queried' : '')
        ],
      );
    }, random(2500));
  });
};

export default mockApi;
