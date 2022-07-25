import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import {
  AddIcon, BoardForm, Button, Modal,
} from '@components';
import { addBoard } from '@redux-store';
import { l, setIsBoardFade } from '@utils';

const AddBoardButton = memo(({ onClick }) => (
  <Button textSize="medium" onClick={onClick}>
    <AddIcon />
    <Button.Text>{l('addBoardButtonText')}</Button.Text>
  </Button>
));

export const AddBoardConnector = memo(({ activeWorkplaceId }) => {
  const dispatch = useDispatch();

  const [ isShowModal, setShowModal ] = useState(false);
  const openModal = useCallback(() => setShowModal(() => true), []);
  const closeModal = useCallback(() => setShowModal(() => false), []);

  const [ requestError, setRequestError ] = useState(null);
  const clearRequestError = useCallback(() => setRequestError(() => null), []);

  const {
    data, loading, error, run,
  } = useApiEffect(API_EFFECTS.BOARDS.ADD);

  const onAddConfirm = useCallback((values) => run({
    workplaceId: activeWorkplaceId,
    ...values,
  }), [ activeWorkplaceId ]);

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
      <AddBoardButton onClick={openModal} />
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
});
