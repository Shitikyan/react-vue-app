import { useRef, useCallback, useEffect } from 'react';
import { isEqual } from 'lodash';

import api from '../../api';
import useMergeState from '../mergeState';
import useDeepCompareMemoize from '../deepCompareMemoize';

export class QueryOptions {
  lazy = false;
  cachePolicy = 'cache-first';
}

/**
 * Returns data, isLoading and error fields of api request
 * along with makeRequest which is api request function.
 * Data, isLoading and error fields are updated within makeRequest using
 * useMergeState which allows to update user component after
 * each makeRequest request. This make data, loading tracking
 * very straighforward for user components.
 */
const useQuery = (url, propsVariables = {}, options = new QueryOptions()) => {
  const { lazy = false, cachePolicy = 'cache-first' } = options;

  const wasCalled = useRef(false);
  const propsVariablesMemoized = useDeepCompareMemoize(propsVariables);

  const isSleeping = lazy && !wasCalled.current;
  const isCacheAvailable = cache[url] && isEqual(cache[url].apiVariables, propsVariables);
  const canUseCache = isCacheAvailable && cachePolicy !== 'no-cache' && !wasCalled.current;

  const [state, mergeState] = useMergeState({
    data: canUseCache ? cache[url].data : null,
    error: null,
    isLoading: !lazy && !canUseCache,
    variables: {},
  });

  const makeRequest = useCallback(
    (newVariables = {}) => {
      const variables = { ...state.variables, ...(newVariables || {}) };
      const apiVariables = { ...propsVariablesMemoized, ...variables };

      const skipLoading = canUseCache && cachePolicy === 'cache-first';

      if (!skipLoading) {
        mergeState({ isLoading: true, variables });
      } else if (newVariables) {
        mergeState({ variables });
      }

      wasCalled.current = true;

      return api.get(url, apiVariables).then(
        (data) => {
          cache[url] = { data, apiVariables };
          mergeState({ data, error: null, isLoading: false });
        },
        (error) => {
          mergeState({ error, data: null, isLoading: false });
        },
      );
    },
    [propsVariablesMemoized],
  );

  useEffect(() => {
    if (isSleeping) return;
    if (canUseCache && cachePolicy === 'cache-only') return;

    makeRequest();
  }, [makeRequest]);

  const setLocalData = useCallback(
    (getUpdatedData) =>
      mergeState(({ data }) => {
        const updatedData = getUpdatedData(data);
        cache[url] = { ...(cache[url] || {}), data: updatedData };
        return { data: updatedData };
      }),
    [mergeState, url],
  );

  return [
    {
      ...state,
      variables: { ...propsVariablesMemoized, ...state.variables },
      setLocalData,
    },
    makeRequest,
  ];
};

const cache = {};

export default useQuery;
