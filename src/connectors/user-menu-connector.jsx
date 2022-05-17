import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, STATUSES, useApiEffect } from '@api-effects';
import { ConfirmModal, UserMenu } from '@components';
import { useAuth } from '@hooks';
import { cleanup } from '@redux-store';

export const UserMenuConnector = (props) => {
  const dispatch = useDispatch();

  const [ isShowLogoutModal, setShowLogoutModal ] = useState(false);
  const openLogoutModal = () => setShowLogoutModal(true);
  const closeLogoutModal = () => setShowLogoutModal(false);

  const { signout } = useAuth();

  const {
    status, run, loading, error,
  } = useApiEffect(API_EFFECTS.AUTH.SIGNOUT);

  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      closeLogoutModal();
      dispatch(cleanup());
      signout();
    }
  }, [ status ]);

  const onLogoutCallback = () => openLogoutModal();
  const onLogoutConfirm = () => run();

  return (
    <>
      <UserMenu onLogoutCallback={onLogoutCallback} {...props} />
      <ConfirmModal
        isDisabled={loading}
        isShow={isShowLogoutModal}
        requestError={error}
        title="Are you sure to logout?"
        onCancel={closeLogoutModal}
        onOk={onLogoutConfirm}
      />
    </>
  );
};
