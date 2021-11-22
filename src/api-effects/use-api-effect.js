import { useState } from 'react';
import axios from 'axios';

const SUCCESS = 'success';
const PENDING = 'pending';
const ERROR = 'error';
const DEFAULT_STATE = {
  error: null, loading: false, status: null, data: null,
};
const DEFAULT_TIMEOUT = 10000;

export const useApiEffect = (apiEffect) => {
  const [state, setState] = useState(DEFAULT_STATE);
  const updateState = (nextState) => setState((prevState) => ({ ...prevState, ...nextState }));

  const run = async (data) => {
    try {
      updateState({ loading: true, status: PENDING });

      const { data: responseData } = await axios({
        timeout: DEFAULT_TIMEOUT,
        ...apiEffect,
        data,
      });

      updateState({ data: responseData, error: null, status: SUCCESS });
    } catch (e) {
      const { status, statusText, data: { message } } = e?.response;

      updateState({ error: { status, statusText, message }, status: ERROR });
    } finally {
      updateState({ loading: false });
    }
  };

  return { ...state, run };
};
