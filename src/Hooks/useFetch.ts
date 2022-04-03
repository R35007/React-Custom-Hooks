import { useEffect, useReducer } from 'react'

export enum ACTIONS {
  LOADING = "fetching",
  SUCCESS = "success",
  FAILURE = "failure"
}

export enum STATUS {
  LOADING = "loading",
  SUCCESS = "success",
  FAILURE = "failure"
}

export interface Action {
  type: ACTIONS,
  payload?: any
}

export interface State {
  loading: boolean,
  data: any,
  error: any,
  status: STATUS
}

const initialState: State = {
  loading: true,
  data: undefined,
  error: undefined,
  status: STATUS.LOADING
}

const reducer = (state: State, action: Action) => {

  switch (action.type) {
    case ACTIONS.LOADING: return { ...initialState }
    case ACTIONS.SUCCESS: return {
      ...initialState,
      loading: false,
      data: action.payload,
      status: STATUS.SUCCESS,
    }
    case ACTIONS.FAILURE: return {
      ...initialState,
      loading: false,
      error: action.payload,
      status: STATUS.FAILURE,
    }
    default: return state
  }
}

export const useFetch = (url: string = "", options?: object): [boolean, any, any, STATUS] => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {

    let isMounted = true;

    dispatch({ type: ACTIONS.LOADING });

    fetch(url, options)
      .then(res => res.json())
      .then(res => {
        if (!isMounted) return;
        dispatch({ type: ACTIONS.SUCCESS, payload: res });
      })
      .catch(err => {
        if (!isMounted) return;
        dispatch({ type: ACTIONS.FAILURE, payload: err });
      })

    return () => { isMounted = false; }

  }, [url, options])

  return [state.loading, state.data, state.error, state.status]

}
