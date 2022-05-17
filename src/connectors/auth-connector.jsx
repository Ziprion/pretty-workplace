import React, { useEffect } from 'react';

import { API_EFFECTS, STATUSES, useApiEffect } from '@api-effects';
import { useAuth } from '@hooks';

export const AuthConnector = ({ children }) => {
  const { signin } = useAuth();
  const { run, status, error } = useApiEffect(API_EFFECTS.AUTH.CHECK);

  useEffect(run, []);

  useEffect(() => status === STATUSES.SUCCESS && signin(), [ status ]);

  if (error && error.status !== 401) {
    return <div>Something went wrong</div>;
  }

  return (
    !(status === STATUSES.PENDING || status === null) && children
  );
};
