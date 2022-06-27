import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useApiEffect } from '@api-effects';
import { LoginForm } from '@components';
import {
  FIELDS, INITIAL_VALUES, LOGIN_FORM_ADDITIONAL, VALIDATION_SCHEMA,
} from '@constants';
import { useAuth } from '@hooks';
import { setUser } from '@redux-store';

export const LoginFormConnector = ({ type }) => {
  const dispatch = useDispatch();
  const { signin } = useAuth();

  const {
    data, error, run, loading,
  } = useApiEffect(LOGIN_FORM_ADDITIONAL[type].apiEffect);

  const [ requestError, setRequestError ] = useState(null);
  const clearRequestError = () => setRequestError(() => null);

  useEffect(() => error && setRequestError(() => error), [ error ]);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
      signin();
    }
  }, [ data ]);

  return (
    <LoginForm
      additional={LOGIN_FORM_ADDITIONAL[type]}
      clearRequestError={clearRequestError}
      fields={FIELDS[type]}
      initialValues={INITIAL_VALUES[type]}
      isLoading={loading}
      requestError={requestError}
      validationSchema={VALIDATION_SCHEMA[type]}
      onSubmit={run}
    />
  );
};
