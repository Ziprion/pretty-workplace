import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import {
  AddIcon, Button, Modal, WorkplaceForm,
} from '@components';
import { addWorkplace, setActiveWorkplace } from '@redux-store';
import { l } from '@utils';

export const AddWorkplaceConnector = () => {
  const dispatch = useDispatch();

  const [ isShowModal, setShowModal ] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [ requestError, setRequestError ] = useState(null);
  const clearRequestError = () => setRequestError(() => null);

  const {
    data, loading, error, run,
  } = useApiEffect(API_EFFECTS.WORKPLACES.ADD);

  useEffect(() => {
    if (data) {
      dispatch(setActiveWorkplace(data));
      dispatch(addWorkplace(data));
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
      <Button textSize="medium" onClick={openModal}>
        <AddIcon />
        {l('addWorkplaceButtonText')}
      </Button>
      <Modal
        isDisabled={loading}
        isShow={isShowModal}
        title={l('addWorkplaceModalTitle')}
        onCancel={closeModal}
      >
        <WorkplaceForm
          clearRequestError={clearRequestError}
          isLoading={loading}
          requestError={requestError}
          onCancel={closeModal}
          onOk={run}
          onOkText="addModalButtonText"
        />
      </Modal>
    </>
  );
};
