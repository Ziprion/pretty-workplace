import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import {
  AddIcon, Modal, WorkplaceForm,
  WorkplacePlateButton,
} from '@components';
import { addWorkplace, setActiveWorkplace } from '@redux-store';
import { l } from '@utils';

const AddWorkplaceButton = memo(({ onClick }) => (
  <WorkplacePlateButton onClick={onClick}>
    <AddIcon />
  </WorkplacePlateButton>
));

export const AddWorkplaceConnector = () => {
  const dispatch = useDispatch();

  const [ isShowModal, setShowModal ] = useState(false);
  const openModal = useCallback(() => setShowModal(() => true), []);
  const closeModal = useCallback(() => setShowModal(() => false), []);

  const [ requestError, setRequestError ] = useState(null);
  const clearRequestError = useCallback(() => setRequestError(() => null), []);

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
      <AddWorkplaceButton onClick={openModal} />
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
