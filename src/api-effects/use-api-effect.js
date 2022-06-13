import { useState } from 'react';
import axios from 'axios';

import { API_EFFECTS } from '@api-effects';

export const STATUSES = {
  SUCCESS: 'success',
  PENDING: 'pending',
  ERROR: 'error',
};

const NO_REDIRECT_URL = [ '/api/auth/signin', '/api/auth/signup', '/api/auth/check' ];
const NO_REFRESH_URL = [ '/api/auth/signin', '/api/auth/signup' ];
const NO_AUTHORIZATION_STATUS = 401;
const REDIRECT_URL = '/signin';

const DEFAULT_STATE = {
  error: null,
  loading: false,
  status: null,
  data: null,
};

const DEFAULT_TIMEOUT = 10000;

const axiosInstance = axios.create({
  timeout: DEFAULT_TIMEOUT,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === NO_AUTHORIZATION_STATUS
      && originalRequest
      && !originalRequest.isRetry
      && !NO_REFRESH_URL.includes(originalRequest.url)
    ) {
      originalRequest.isRetry = true;

      try {
        await axios({
          timeout: DEFAULT_TIMEOUT,
          ...API_EFFECTS.AUTH.REFRESH(),
        });

        return axios.request(originalRequest);
      } catch {
        throw error;
      }
    }

    throw error;
  },
);

export const useApiEffect = (apiEffect) => {
  const [ state, setState ] = useState(DEFAULT_STATE);
  const updateState = (nextState) => setState((prevState) => ({
    ...prevState,
    ...nextState,
  }));

  const run = async (params) => {
    updateState({
      loading: true,
      status: STATUSES.PENDING,
    });

    try {
      const effectInstance = apiEffect(params);

      const { data } = await axiosInstance({
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
        status,
        statusText,
        data: {
          message,
        },
        config: {
          url,
        },
      } = e?.response;

      updateState({
        error: {
          status,
          statusText,
          message,
        },
        status: STATUSES.ERROR,
      });

      if (!NO_REDIRECT_URL.includes(url) && status === NO_AUTHORIZATION_STATUS) {
        window.location.replace(REDIRECT_URL);
      }
    } finally {
      updateState({ loading: false });
    }
  };

  return {
    ...state,
    run,
  };
};
