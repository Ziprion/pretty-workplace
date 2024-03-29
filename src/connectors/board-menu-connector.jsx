import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, STATUSES, useApiEffect } from '@api-effects';
import {
  BoardForm, BoardMenu, ConfirmModal, Modal,
} from '@components';
import { deleteBoard, editBoard } from '@redux-store';
import { l } from '@utils';

export const BoardMenuConnector = ({ title, id }) => {
  const dispatch = useDispatch();

  const [ isShowDeleteModal, setShowDeleteModal ] = useState(false);
  const openDeleteModal = useCallback(() => setShowDeleteModal(() => true), []);
  const closeDeleteModal = useCallback(() => setShowDeleteModal(() => false), []);

  const [ isShowEditModal, setShowEditModal ] = useState(false);
  const openEditModal = useCallback(() => setShowEditModal(() => true), []);
  const closeEditModal = useCallback(() => setShowEditModal(() => false), []);

  const [ requestError, setRequestError ] = useState(null);
  const clearRequestError = useCallback(() => setRequestError(() => null), []);

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

  const onDeleteCallback = useCallback(openDeleteModal, []);

  const onEditCallback = useCallback(openEditModal, []);

  const onDeleteConfirm = useCallback(() => runDeleteBoard(id), [ id ]);

  const onEditConfirm = useCallback((data) => runEditBoard({
    id,
    data,
  }), [ id ]);

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

    if (deletingError) {
      setRequestError(() => deletingError);
    }
  }, [ deletingError, editingError ]);

  return (
    <>
      <BoardMenu onDeleteCallback={onDeleteCallback} onEditCallback={onEditCallback} />
      <ConfirmModal
        clearRequestError={clearRequestError}
        isDisabled={deletingLoading}
        isShow={isShowDeleteModal}
        requestError={requestError}
        title={`${l('deleteBoardModalTitle')} ${title}?`}
        onCancel={closeDeleteModal}
        onOk={onDeleteConfirm}
      />
      <Modal
        isDisabled={editingLoading}
        isShow={isShowEditModal}
        title={l('editBoardModalTitle')}
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
