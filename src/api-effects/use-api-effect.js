import { useState } from 'react';
import axios from 'axios';

export const STATUSES = {
  SUCCESS: 'success',
  PENDING: 'pending',
  ERROR: 'error',
};

export const DEFAULT_STATE = {
  error: null,
  loading: false,
  status: null,
  data: null,
};

export const DEFAULT_TIMEOUT = 10000;

export const useApiEffect = (apiEffect) => {
  const [ state, setState ] = useState(DEFAULT_STATE);
  const updateState = (nextState) => setState((prevState) => ({
    ...prevState,
    ...nextState,
  }));

  const run = async (params) => {
    try {
      updateState({
        loading: true,
        status: STATUSES.PENDING,
      });

      const effectInstance = apiEffect(params);

      const { data } = await axios({
        timeout: DEFAULT_TIMEOUT,
        ...effectInstance,
      });

      updateState({
        data,
        error: null,
        status: STATUSES.SUCCESS,
      });
    } catch (e) {
      const {
        status, statusText, data: { message },
      } = e?.response;

      updateState({
        error: {
          status,
          statusText,
          message,
        },
        status: STATUSES.ERROR,
      });
    } finally {
      updateState({ loading: false });
    }
  };

  return {
    ...state,
    run,
  };
};
