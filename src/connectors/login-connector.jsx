import React, { useState, useEffect } from 'react';
import { useAuth } from 'hooks';
import { useApiEffect, API_EFFECTS } from 'api-effects';
import { FIELDS, INITIAL_VALUES } from 'constants';
import { VALIDATION_SCHEMA } from 'utils';
import { LoginForm } from 'components';

export const LoginConnector = ({ type, isSignup }) => {
  const { error: loginError, run, data } = isSignup
    ? useApiEffect(API_EFFECTS.AUTH.SIGNUP)
    : useApiEffect(API_EFFECTS.AUTH.SIGNIN);
  const { signin } = useAuth();
  const [error, setError] = useState(null);
  const clearError = () => setError(() => null);

  useEffect(() => {
    if (loginError) {
      setError(() => loginError);
    }
  }, [loginError]);

  useEffect(() => {
    if (data) {
      signin();
    }
  }, [data]);

  return (
    <LoginForm
      error={error}
      clearError={clearError}
      onSubmit={run}
      validationSchema={VALIDATION_SCHEMA[type]}
      initialValues={INITIAL_VALUES[type]}
      fields={FIELDS[type]}
      isSignup={isSignup}
    />
  );
};
