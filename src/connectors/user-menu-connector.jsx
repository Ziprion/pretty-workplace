import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, STATUSES, useApiEffect } from '@api-effects';
import { ConfirmModal, UserMenu } from '@components';
import { useAuth } from '@hooks';
import { cleanup } from '@redux-store';
import { l } from '@utils';

export const UserMenuConnector = () => {
  const dispatch = useDispatch();

  const [ isShowLogoutModal, setShowLogoutModal ] = useState(false);
  const openLogoutModal = useCallback(() => setShowLogoutModal(() => true), []);
  const closeLogoutModal = useCallback(() => setShowLogoutModal(() => false), []);

  const [ requestError, setRequestError ] = useState(null);
  const clearRequestError = useCallback(() => setRequestError(() => null), []);

  const { signout } = useAuth();

  const {
    status, run, loading, error,
  } = useApiEffect(API_EFFECTS.AUTH.SIGNOUT);

  const onLogoutCallback = useCallback(() => openLogoutModal(), []);
  const onLogoutConfirm = useCallback(() => run(), []);

  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      closeLogoutModal();
      dispatch(cleanup());
      signout();
    }
  }, [ status ]);

  useEffect(() => {
    if (error) {
      setRequestError(() => error);
    }
  }, [ error ]);

  return (
    <>
      <UserMenu onLogoutCallback={onLogoutCallback} />
      <ConfirmModal
        clearRequestError={clearRequestError}
        isDisabled={loading}
        isShow={isShowLogoutModal}
        requestError={requestError}
        title={l('logoutModalTitle')}
        onCancel={closeLogoutModal}
        onOk={onLogoutConfirm}
      />
    </>
  );
};
