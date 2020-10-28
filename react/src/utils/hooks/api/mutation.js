import { useCallback } from 'react';
import api from '.';
import useMergeState from '../mergeState';

/**
 * Returns data, isLoading and error fields of api request
 * along with makeRequest which is api request function.
 * Data, isLoading and error fields are updated within makeRequest using
 * useMergeState which allows to update user component after
 * each makeRequest request. This make data, loading tracking
 * very straighforward for user components.
 */
const useMutation = (method, url) => {
  const [state, mergeState] = useMergeState({
    data: null,
    error: null,
    isWorking: false,
  });

  const makeRequest = useCallback(
    (variables = {}) =>
      new Promise((resolve, reject) => {
        mergeState({ error: null, isWorking: true });

        api[method](url, variables).then(
          (data) => {
            mergeState({ data, error: null, isWorking: false });
            resolve(data);
          },
          (error) => {
            mergeState({ error, data: null, isWorking: false });
            reject(error);
          },
        );
      }),
    [method, url, mergeState],
  );

  return [
    {
      ...state,
      [isWorkingAlias[method]]: state.isWorking,
    },
    makeRequest,
  ];
};

/**
 * Returned in useMutation. Represents current state of request.
 */
const isWorkingAlias = {
  get: 'isFetching',
  post: 'isCreating',
  put: 'isUpdating',
  patch: 'isUpdating',
  delete: 'isDeleting',
};

export default useMutation;
