import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import {
  Button, Modal, SwitchIcon, WorkplaceSwitcherForm,
} from '@components';
import { setActiveWorkplace } from '@redux-store';
import { l } from '@utils';

export const WorkplaceSwitcherConnector = (props) => {
  const dispatch = useDispatch();

  const [ isShowModal, setShowModal ] = useState(false);
  const closeModal = () => setShowModal(() => false);
  const openModal = () => setShowModal(() => true);

  const [ requestError, setRequestError ] = useState(null);
  const clearRequestError = () => setRequestError(() => null);

  const {
    run, data, loading, error,
  } = useApiEffect(API_EFFECTS.WORKPLACES.CHANGE_ACTIVE);

  const onChangeConfirm = ({ workplaceId }) => run({ id: workplaceId });

  useEffect(() => {
    if (data) {
      dispatch(setActiveWorkplace(data));
      closeModal();
    }
  }, [ data ]);

  useEffect(() => {
    if (error) {
      setRequestError(() => error);
    }
  }, [ error ]);

  return (
    <>
      <Button
        textSize="medium"
        isSecondary
        onClick={openModal}
      >
        <SwitchIcon />
        {l('switchWorkplaceButtonText')}
      </Button>
      <Modal
        isDisabled={loading}
        isShow={isShowModal}
        title={l('switchWorkplaceModalTitle')}
        onCancel={closeModal}
      >
        <WorkplaceSwitcherForm
          clearRequestError={clearRequestError}
          isLoading={loading}
          requestError={requestError}
          onCancel={closeModal}
          onOk={onChangeConfirm}
          {...props}
        />
      </Modal>
    </>
  );
};
