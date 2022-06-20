import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import {
  AddBoardButton, AddIcon, BoardForm, Modal,
} from '@components';
import { addBoard } from '@redux-store';
import { l } from '@utils';

export const AddBoardConnector = ({ activeWorkplaceId }) => {
  const dispatch = useDispatch();

  const [ isShowModal, setShowModal ] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [ requestError, setRequestError ] = useState(null);
  const clearRequestError = () => setRequestError(() => null);

  const {
    data, loading, error, run,
  } = useApiEffect(API_EFFECTS.BOARDS.ADD);

  const onAddConfirm = (values) => run({
    workplaceId: activeWorkplaceId,
    ...values,
  });

  useEffect(() => {
    if (data) {
      dispatch(addBoard(data));
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
      <AddBoardButton onClick={openModal}>
        <AddIcon />
      </AddBoardButton>
      <Modal
        isDisabled={loading}
        isShow={isShowModal}
        title={l('addBoardModalTitle')}
        onCancel={closeModal}
      >
        <BoardForm
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
