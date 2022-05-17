import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, STATUSES, useApiEffect } from '@api-effects';
import {
  BoardForm, BoardMenu, ConfirmModal, Modal,
} from '@components';
import { deleteBoard, editBoard } from '@redux-store';

export const BoardMenuConnector = ({ title, id }) => {
  const dispatch = useDispatch();

  const [ isShowDeleteModal, setShowDeleteModal ] = useState(false);
  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const [ isShowEditModal, setShowEditModal ] = useState(false);
  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);

  const [ requestError, setRequestError ] = useState(null);
  const clearRequestError = () => setRequestError(() => null);

  const {
    loading: deletingLoading,
    error: deletingError,
    status: deletingStatus,
    run: runDeleteBoard,
  } = useApiEffect(API_EFFECTS.BOARDS.DELETE);

  const {
    data: editedBoard,
    loading: editingLoading,
    error: editingError,
    run: runEditBoard,
  } = useApiEffect(API_EFFECTS.BOARDS.EDIT);

  const onDeleteCallback = () => {
    openDeleteModal();
  };

  const onEditCallback = () => {
    openEditModal();
  };

  const onDeleteConfirm = () => runDeleteBoard(id);

  const onEditConfirm = (data) => runEditBoard({
    id,
    data,
  });

  useEffect(() => {
    if (deletingStatus === STATUSES.SUCCESS) {
      closeDeleteModal();
      dispatch(deleteBoard(id));
    }
  }, [ deletingStatus ]);

  useEffect(() => {
    if (editedBoard) {
      closeEditModal();
      dispatch(editBoard(editedBoard));
    }
  }, [ editedBoard ]);

  useEffect(() => {
    if (editingError) {
      setRequestError(() => editingError);
    }
  }, [ editingError ]);

  return (
    <>
      <BoardMenu onDeleteCallback={onDeleteCallback} onEditCallback={onEditCallback} />
      <ConfirmModal
        isDisabled={deletingLoading}
        isShow={isShowDeleteModal}
        requestError={deletingError}
        title={`Are you sure to delete board ${title}?`}
        onCancel={closeDeleteModal}
        onOk={onDeleteConfirm}
      />
      <Modal
        isDisabled={editingLoading}
        isShow={isShowEditModal}
        title="Rename board"
        onCancel={closeEditModal}
      >
        <BoardForm
          clearRequestError={clearRequestError}
          initialTitle={title}
          isLoading={editingLoading}
          requestError={requestError}
          onCancel={closeEditModal}
          onOk={onEditConfirm}
        />
      </Modal>
    </>
  );
};
