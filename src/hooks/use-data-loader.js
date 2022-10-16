import { useEffect, useMemo, useReducer } from 'react';

const STATE_LIST = {
  initial: "initial",
  loading: "loading",
  ready: "ready",
  error: "error",
}

const REDUCER_ACTIONS = {
  setData: "setData",
  setError: "setError",
  setLoading: "setLoading",
  setHandlers: "setHandlers",
}

const initialState = {
  data: null,
  state: STATE_LIST.initial,
  error: null,
  handlers: null,
};


function reducer(state, action) {
  switch (action.type) {
    case REDUCER_ACTIONS.setData:
      return { ...state, data: action.payload, state: STATE_LIST.ready };
    case REDUCER_ACTIONS.setError:
      return { ...state, error: action.payload, state: STATE_LIST.error };
    case REDUCER_ACTIONS.setLoading:
      return { ...state, state: STATE_LIST.loading };
    case REDUCER_ACTIONS.setHandlers:
      return { ...state, handlers: action.payload };
    default:
      throw new Error();
  }
}


const handleLoad = async ({ dispatch, onLoad, offset, name, initial }) => {
  try {
    !initial && dispatch({ type: REDUCER_ACTIONS.setLoading});
    let data = await onLoad({offset, name});
    dispatch({ type: REDUCER_ACTIONS.setData, payload: data  });
  } catch(e) {
    dispatch({ type: REDUCER_ACTIONS.setError, payload: e });
  }
}


function useDataLoader({handlers: { onLoad }}) {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handlers = useMemo(() => ({
    onLoad: ({offset, name}) => handleLoad({ dispatch, onLoad, offset, name }),
  }), [onLoad]);

  useEffect(() => {
    dispatch({ type: REDUCER_ACTIONS.setHandlers, payload: handlers });
  }, [handlers])


  useEffect(() => {
    handleLoad({ dispatch, onLoad, initial: true });
  }, [])

  return state;
}

export default useDataLoader;
