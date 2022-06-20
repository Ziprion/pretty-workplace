import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import {
  ConfirmModal, Modal, WorkplaceForm, WorkplaceMenu,
} from '@components';
import { deleteWorkplace, editWorkplace, setActiveWorkplace } from '@redux-store';
import { l } from '@utils';

export const WorkplaceMenuConnector = ({ activeWorkplaceTitle, activeWorkplaceId }) => {
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
    data: newActiveWorkplace,
    loading: deletingLoading,
    error: deletingError,
    run: runDeleteWorkplace,
  } = useApiEffect(API_EFFECTS.WORKPLACES.DELETE);

  const {
    data: editedActiveWorkplace,
    loading: editingLoading,
    error: editingError,
    run: runEditWorkplace,
  } = useApiEffect(API_EFFECTS.WORKPLACES.EDIT);

  const onDeleteCallback = () => {
    openDeleteModal();
  };

  const onEditCallback = () => {
    openEditModal();
  };

  const onDeleteConfirm = () => runDeleteWorkplace();

  const onEditConfirm = (data) => runEditWorkplace(data);

  useEffect(() => {
    if (newActiveWorkplace) {
      closeDeleteModal();
      dispatch(deleteWorkplace(activeWorkplaceId));
      dispatch(setActiveWorkplace(newActiveWorkplace));
    }
  }, [ newActiveWorkplace ]);

  useEffect(() => {
    if (editedActiveWorkplace) {
      closeEditModal();
      dispatch(editWorkplace(editedActiveWorkplace));
    }
  }, [ editedActiveWorkplace ]);

  useEffect(() => {
    if (editingError) {
      setRequestError(() => editingError);
    }
  }, [ editingError ]);

  return (
    <>
      <WorkplaceMenu onDeleteCallback={onDeleteCallback} onEditCallback={onEditCallback} />
      <ConfirmModal
        isDisabled={deletingLoading}
        isShow={isShowDeleteModal}
        requestError={deletingError}
        title={`${l('deleteWorkplaceModalTitle')} ${activeWorkplaceTitle}?`}
        onCancel={closeDeleteModal}
        onOk={onDeleteConfirm}
      />
      <Modal
        isDisabled={editingLoading}
        isShow={isShowEditModal}
        title={l('editWorkplaceModalTitle')}
        onCancel={closeEditModal}
      >
        <WorkplaceForm
          clearRequestError={clearRequestError}
          initialTitle={activeWorkplaceTitle}
          isLoading={editingLoading}
          requestError={requestError}
          onCancel={closeEditModal}
          onOk={onEditConfirm}
        />
      </Modal>
    </>
  );
};
