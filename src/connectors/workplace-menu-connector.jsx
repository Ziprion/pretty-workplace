import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import {
  ConfirmModal, WorkplaceMenu, WorkplaceModal, WorkplaceSwitchModal,
} from '@components';
import {
  addWorkplace, deleteWorkplace, editWorkplace, setActiveWorkplace,
} from '@redux-store';
import { l } from '@utils';

export const WorkplaceMenuConnector = ({ activeWorkplaceTitle, activeWorkplaceId, workplaces }) => {
  const dispatch = useDispatch();

  const [ requestError, setRequestError ] = useState(null);
  const clearRequestError = () => setRequestError(() => null);

  const [ isShowSwitchModal, setShowSwitchModal ] = useState(false);
  const openSwitchModal = () => setShowSwitchModal(true);
  const closeSwitchModal = () => setShowSwitchModal(false);

  const [ isShowAddModal, setShowAddModal ] = useState(false);
  const openAddModal = () => setShowAddModal(true);
  const closeAddModal = () => setShowAddModal(false);

  const [ isShowEditModal, setShowEditModal ] = useState(false);
  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);

  const [ isShowDeleteModal, setShowDeleteModal ] = useState(false);
  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const {
    data: switchedWorkplace,
    loading: switchingLoading,
    error: switchingError,
    run: runSwitchWorkplace,
  } = useApiEffect(API_EFFECTS.WORKPLACES.CHANGE_ACTIVE);

  const {
    data: addedWorkplace,
    loading: addingLoading,
    error: addingError,
    run: runAddWorkplace,
  } = useApiEffect(API_EFFECTS.WORKPLACES.ADD);

  const {
    data: editedWorkplace,
    loading: editingLoading,
    error: editingError,
    run: runEditWorkplace,
  } = useApiEffect(API_EFFECTS.WORKPLACES.EDIT);

  const {
    data: changedWorkplace,
    loading: deletingLoading,
    error: deletingError,
    run: runDeleteWorkplace,
  } = useApiEffect(API_EFFECTS.WORKPLACES.DELETE);

  const onSwitchConfirm = ({ workplaceId }) => runSwitchWorkplace({ id: workplaceId });
  const onAddConfirm = (data) => runAddWorkplace(data);
  const onEditConfirm = (data) => runEditWorkplace(data);
  const onDeleteConfirm = () => runDeleteWorkplace();

  useEffect(() => {
    if (editingError) {
      setRequestError(() => editingError);
    }

    if (addingError) {
      setRequestError(() => addingError);
    }

    if (switchingError) {
      setRequestError(() => switchingError);
    }

    if (deletingError) {
      setRequestError(() => deletingError);
    }
  }, [ editingError, addingError, switchingError, deletingError ]);

  useEffect(() => {
    if (switchedWorkplace) {
      dispatch(setActiveWorkplace(switchedWorkplace));
      closeSwitchModal();
    }
  }, [ switchedWorkplace ]);

  useEffect(() => {
    if (addedWorkplace) {
      closeAddModal();
      dispatch(addWorkplace(addedWorkplace));
      dispatch(setActiveWorkplace(addedWorkplace));
    }
  }, [ addedWorkplace ]);

  useEffect(() => {
    if (editedWorkplace) {
      closeEditModal();
      dispatch(editWorkplace(editedWorkplace));
    }
  }, [ editedWorkplace ]);

  useEffect(() => {
    if (changedWorkplace) {
      closeDeleteModal();
      dispatch(deleteWorkplace(activeWorkplaceId));
      dispatch(setActiveWorkplace(changedWorkplace));
    }
  }, [ changedWorkplace ]);

  return (
    <>
      <WorkplaceMenu
        workplaces={workplaces}
        onAddCallback={openAddModal}
        onDeleteCallback={openDeleteModal}
        onEditCallback={openEditModal}
        onSwitchCallback={openSwitchModal}
      />
      <WorkplaceSwitchModal
        activeWorkplaceId={activeWorkplaceId}
        clearRequestError={clearRequestError}
        isLoading={switchingLoading}
        isShow={isShowSwitchModal}
        requestError={requestError}
        title={l('switchWorkplaceModalTitle')}
        workplaces={workplaces}
        onCancel={closeSwitchModal}
        onOk={onSwitchConfirm}
      />
      <WorkplaceModal
        clearRequestError={clearRequestError}
        isLoading={addingLoading}
        isShow={isShowAddModal}
        requestError={requestError}
        title={l('addWorkplaceModalTitle')}
        onCancel={closeAddModal}
        onOk={onAddConfirm}
        onOkText="addModalButtonText"
      />
      <WorkplaceModal
        clearRequestError={clearRequestError}
        initialTitle={activeWorkplaceTitle}
        isLoading={editingLoading}
        isShow={isShowEditModal}
        requestError={requestError}
        title={l('editWorkplaceModalTitle')}
        onCancel={closeEditModal}
        onOk={onEditConfirm}
      />
      <ConfirmModal
        clearRequestError={clearRequestError}
        isDisabled={deletingLoading}
        isShow={isShowDeleteModal}
        requestError={requestError}
        title={`${l('deleteWorkplaceModalTitle')} ${activeWorkplaceTitle}?`}
        onCancel={closeDeleteModal}
        onOk={onDeleteConfirm}
      />
    </>
  );
};
