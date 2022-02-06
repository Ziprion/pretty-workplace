import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import { STATUSES } from '@constants';
import { useAuth } from '@hooks';
import { cleanup } from '@redux-store';

export const LogoutConnector = () => {
  const dispatch = useDispatch();
  const { status, run } = useApiEffect(API_EFFECTS.AUTH.SIGNOUT);
  const { signout } = useAuth();

  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      signout();
      dispatch(cleanup());
    }
  }, [ status ]);

  return (
    <button type="button" onClick={() => run()}>Logout</button>
  );
};
