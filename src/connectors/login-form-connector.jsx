import React, { useEffect, useState } from 'react';

import { STATUSES, useApiEffect } from '@api-effects';
import { LoginForm } from '@components';
import {
  FIELDS, INITIAL_VALUES, LOGIN_FORM_ADDITIONAL, VALIDATION_SCHEMA,
} from '@constants';
import { useAuth } from '@hooks';

export const LoginFormConnector = ({ type }) => {
  const { signin } = useAuth();

  const {
    error, run, status, loading,
  } = useApiEffect(LOGIN_FORM_ADDITIONAL[type].apiEffect);

  const [ requestError, setRequestError ] = useState(null);
  const clearRequestError = () => setRequestError(() => null);

  useEffect(() => error && setRequestError(() => error), [ error ]);

  useEffect(() => status === STATUSES.SUCCESS && signin(), [ status ]);

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
