import React, { useEffect } from 'react';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import { STATUSES } from '@constants';
import { useAuth } from '@hooks';

export const AuthConnector = ({ children }) => {
  const { run, status } = useApiEffect(API_EFFECTS.AUTH.CHECK);
  const { signin } = useAuth();

  useEffect(() => {
    run();
  }, []);

  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      signin();
    }
  }, [ status ]);

  return (
    <>
      {(status === STATUSES.SUCCESS || status === STATUSES.ERROR) && children}
    </>
  );
};
