import { useState, useCallback } from 'react';
import { isFunction } from 'lodash';

/**
 * Helper hook to change parents state within children and avoid
 * many setState props going from parents to children.
 */
const useMergeState = (initialState) => {
  const [state, setState] = useState(initialState || {});

  const mergeState = useCallback((newState) => {
    if (isFunction(newState)) {
      setState((currentState) => ({ ...currentState, ...newState(currentState) }));
    } else {
      setState((currentState) => ({ ...currentState, ...newState }));
    }
  }, []);

  return [state, mergeState];
};

export default useMergeState;
