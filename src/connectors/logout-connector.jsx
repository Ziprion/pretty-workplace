import React, { useEffect } from 'react';
import { useAuth } from '@hooks';
import { useApiEffect, API_EFFECTS } from '@api-effects';
import { STATUSES } from '@constants';

export const LogoutConnector = () => {
  const { status, run } = useApiEffect(API_EFFECTS.AUTH.SIGNOUT);
  const { signout } = useAuth();

  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      signout();
    }
  }, [status]);

  return (
    <button type="button" onClick={() => run()}>Logout</button>
  );
};
