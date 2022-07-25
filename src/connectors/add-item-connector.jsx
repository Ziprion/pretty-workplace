import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import {
  AddIcon, GhostButton, ItemForm, Modal,
} from '@components';
import { addItem } from '@redux-store';
import { l } from '@utils';

const AddItemButton = memo(({ onClick }) => (
  <GhostButton isSecondary onClick={onClick}>
    <AddIcon />
  </GhostButton>
));

export const AddItemConnector = ({ boardId }) => {
  const dispatch = useDispatch();

  const [ isShowModal, setShowModal ] = useState(false);
  const openModal = useCallback(() => setShowModal(() => true), []);
  const closeModal = useCallback(() => setShowModal(() => false), []);

  const [ requestError, setRequestError ] = useState(null);
  const clearRequestError = useCallback(() => setRequestError(() => null), []);

  const {
    data, loading, error, run,
  } = useApiEffect(API_EFFECTS.ITEMS.ADD);

  const onAddConfirm = useCallback((values) => run({
    boardId,
    ...values,
  }), [ boardId ]);

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
      <AddItemButton onClick={openModal} />
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
