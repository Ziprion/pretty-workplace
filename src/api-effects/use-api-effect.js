import { useState } from 'react';
import axios from 'axios';

import { API_EFFECTS } from '@api-effects';
import { useAuth } from '@hooks';

export const STATUSES = {
  SUCCESS: 'success',
  PENDING: 'pending',
  ERROR: 'error',
};

const NO_AUTHORIZATION_URL = [ '/api/auth/signin', '/api/auth/signup' ];
const NO_AUTHORIZATION_STATUS = 401;

const DEFAULT_STATE = {
  error: null,
  loading: false,
  status: null,
  data: null,
};

const DEFAULT_TIMEOUT = 10000;

const UNKNOWN_ERROR = {
  status: 408,
  statusText: 'unknownError',
  message: 'unknownError',
};

const axiosInstance = axios.create({
  timeout: DEFAULT_TIMEOUT,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === NO_AUTHORIZATION_STATUS
      && originalRequest
      && !originalRequest.isRetry
      && !NO_AUTHORIZATION_URL.includes(originalRequest.url)
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
  const { signout } = useAuth();
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
        loading: false,
      });
    } catch (e) {
      if (!e.response) {
        updateState({
          error: UNKNOWN_ERROR,
          status: STATUSES.ERROR,
          loading: false,
        });

        throw e;
      }

      const {
        status,
        statusText,
        data: {
          message,
        },
        config: {
          url,
        },
      } = e.response;

      if (!NO_AUTHORIZATION_URL.includes(url) && status === NO_AUTHORIZATION_STATUS) {
        signout();
        if (url !== '/api/user/me') return;
      }

      updateState({
        error: {
          status,
          statusText,
          message,
        },
        status: STATUSES.ERROR,
        loading: false,
      });
    }
  };

  return {
    ...state,
    run,
  };
};
