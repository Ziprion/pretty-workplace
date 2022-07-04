import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import {
  AddIcon, BoardForm, Button, Modal,
} from '@components';
import { addBoard } from '@redux-store';
import { l, setIsBoardFade } from '@utils';

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
      setIsBoardFade(data.id);
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
        <Button.Text>{l('addBoardButtonText')}</Button.Text>
      </Button>
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
