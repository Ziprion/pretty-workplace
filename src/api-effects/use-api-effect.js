import { useState } from 'react';
import axios from 'axios';
import { STATUSES, DEFAULT_STATE, DEFAULT_TIMEOUT } from '@constants';

export const useApiEffect = (apiEffect) => {
  const [state, setState] = useState(DEFAULT_STATE);
  const updateState = (nextState) => setState((prevState) => ({ ...prevState, ...nextState }));

  const run = async (data) => {
    try {
      updateState({ loading: true, status: STATUSES.PENDING });

      const { data: responseData } = await axios({
        timeout: DEFAULT_TIMEOUT,
        ...apiEffect,
        data,
      });

      updateState({ data: responseData, error: null, status: STATUSES.SUCCESS });
    } catch (e) {
      const { status, statusText, data: { message } } = e?.response;

      updateState({ error: { status, statusText, message }, status: STATUSES.ERROR });
    } finally {
      updateState({ loading: false });
    }
  };

  return { ...state, run };
};
