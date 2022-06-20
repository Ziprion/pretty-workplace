import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import {
  AddIcon, GhostButton, ItemForm, Modal,
} from '@components';
import { addItem } from '@redux-store';
import { l } from '@utils';

export const AddItemConnector = ({ boardId }) => {
  const dispatch = useDispatch();

  const [ isShowModal, setShowModal ] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [ requestError, setRequestError ] = useState(null);
  const clearRequestError = () => setRequestError(() => null);

  const {
    data, loading, error, run,
  } = useApiEffect(API_EFFECTS.ITEMS.ADD);

  const onAddConfirm = (values) => run({
    boardId,
    ...values,
  });

  useEffect(() => {
    if (data) {
      dispatch(addItem(data));
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
      <GhostButton isSecondary onClick={openModal}>
        <AddIcon />
      </GhostButton>
      <Modal
        isDisabled={loading}
        isShow={isShowModal}
        title={l('addItemModalTitle')}
        onCancel={closeModal}
      >
        <ItemForm
          clearRequestError={clearRequestError}
          isLoading={loading}
          requestError={requestError}
          onCancel={closeModal}
          onOk={onAddConfirm}
          onOkText="addModalButtonText"
        />
      </Modal>
    </>
  );
};
