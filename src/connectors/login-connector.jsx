import React, { useEffect, useState } from 'react';

import { useApiEffect } from '@api-effects';
import { LoginForm } from '@components';
import {
  FIELDS,
  INITIAL_VALUES,
  LOGIN_FORM_ADDITIONAL,
  STATUSES,
  VALIDATION_SCHEMA,
} from '@constants';
import { useAuth } from '@hooks';

export const LoginConnector = ({ type }) => {
  const {
    error: loginError,
    run,
    status,
  } = useApiEffect(LOGIN_FORM_ADDITIONAL[type].apiEffect);

  const { signin } = useAuth();

  const [ error, setError ] = useState(null);
  const clearError = () => setError(() => null);

  useEffect(() => {
    if (loginError) {
      setError(() => loginError);
    }
  }, [ loginError ]);

  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      signin();
    }
  }, [ status ]);
  console.log('qwe');
  return (
    <LoginForm
      error={error}
      clearError={clearError}
      onSubmit={run}
      validationSchema={VALIDATION_SCHEMA[type]}
      initialValues={INITIAL_VALUES[type]}
      fields={FIELDS[type]}
      additional={LOGIN_FORM_ADDITIONAL[type]}
    />
  );
};
