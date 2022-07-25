import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, STATUSES, useApiEffect } from '@api-effects';
import {
  ConfirmModal, ItemForm, ItemMenu, Modal,
} from '@components';
import { deleteItem, editItem } from '@redux-store';
import { l } from '@utils';

export const ItemMenuConnector = memo(({
  title, id, url, boardId, onCopyCallback,
}) => {
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
    status: deletingStatus,
    loading: deletingLoading,
    error: deletingError,
    run: runDeleteItem,
  } = useApiEffect(API_EFFECTS.ITEMS.DELETE);

  const {
    data: editedItem,
    loading: editingLoading,
    error: editingError,
    run: runEditItem,
  } = useApiEffect(API_EFFECTS.ITEMS.EDIT);

  const onDeleteCallback = useCallback(openDeleteModal, []);

  const onEditCallback = useCallback(openEditModal, []);

  const onDeleteConfirm = useCallback(() => runDeleteItem(id), [ id ]);

  const onEditConfirm = useCallback((data) => runEditItem({
    id,
    boardId,
    ...data,
  }), [ id, boardId ]);

  useEffect(() => {
    if (deletingStatus === STATUSES.SUCCESS) {
      closeDeleteModal();
      dispatch(deleteItem({
        boardId,
        itemId: id,
      }));
    }
  }, [ deletingStatus ]);

  useEffect(() => {
    if (editedItem) {
      closeEditModal();
      dispatch(editItem(editedItem));
    }
  }, [ editedItem ]);

  useEffect(() => {
    if (editingError) {
      setRequestError(() => editingError);
    }

    if (deletingError) {
      setRequestError(() => deletingError);
    }
  }, [ editingError, deletingError ]);

  return (
    <>
      <ItemMenu
        onCopyCallback={onCopyCallback}
        onDeleteCallback={onDeleteCallback}
        onEditCallback={onEditCallback}
      />
      <ConfirmModal
        clearRequestError={clearRequestError}
        isDisabled={deletingLoading}
        isShow={isShowDeleteModal}
        requestError={requestError}
        title={`${l('deleteItemModalTitle')} ${title}?`}
        onCancel={closeDeleteModal}
        onOk={onDeleteConfirm}
      />
      <Modal
        isDisabled={editingLoading}
        isShow={isShowEditModal}
        title={l('editItemModalTitle')}
        onCancel={closeEditModal}
      >
        <ItemForm
          clearRequestError={clearRequestError}
          initialTitle={title}
          initialUrl={url}
          isLoading={editingLoading}
          requestError={requestError}
          onCancel={closeEditModal}
          onOk={onEditConfirm}
        />
      </Modal>
    </>
  );
});
