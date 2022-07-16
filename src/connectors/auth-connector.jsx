import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, STATUSES, useApiEffect } from '@api-effects';
import { Loading } from '@components';
import { useAuth } from '@hooks';
import { setUser } from '@redux-store';

export const AuthConnector = ({ children }) => {
  const dispatch = useDispatch();

  const { signin } = useAuth();

  const {
    data, run, error, status,
  } = useApiEffect(API_EFFECTS.USER.ME);

  useEffect(run, []);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
      signin();
    }
  }, [ data ]);

  if (error) {
    return <div>Something went wrong</div>;
  }

  return status === STATUSES.PENDING || status === null
    ? <Loading />
    : children;
};
