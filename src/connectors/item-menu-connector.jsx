import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, STATUSES, useApiEffect } from '@api-effects';
import {
  ConfirmModal, ItemForm, ItemMenu, Modal,
} from '@components';
import { deleteItem, editItem } from '@redux-store';
import { l } from '@utils';

export const ItemMenuConnector = ({
  title, id, url, boardId, onCopyCallback,
}) => {
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

  const onDeleteCallback = () => {
    openDeleteModal();
  };

  const onEditCallback = () => {
    openEditModal();
  };

  const onDeleteConfirm = () => runDeleteItem(id);

  const onEditConfirm = (data) => runEditItem({
    id,
    boardId,
    ...data,
  });

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
  }, [ editingError ]);

  return (
    <>
      <ItemMenu
        onCopyCallback={onCopyCallback}
        onDeleteCallback={onDeleteCallback}
        onEditCallback={onEditCallback}
      />
      <ConfirmModal
        isDisabled={deletingLoading}
        isShow={isShowDeleteModal}
        requestError={deletingError}
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
};
