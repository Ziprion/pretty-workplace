import React from 'react';

import { Modal, WorkplaceSwitcherForm } from '@components';

export const WorkplaceSwitchModal = ({
  isLoading, isShow, title, onCancel, requestError, clearRequestError, onOk, activeWorkplaceId, workplaces,
}) => (
  <Modal
    isDisabled={isLoading}
    isShow={isShow}
    title={title}
    onCancel={onCancel}
  >
    <WorkplaceSwitcherForm
      activeWorkplaceId={activeWorkplaceId}
      clearRequestError={clearRequestError}
      isLoading={isLoading}
      requestError={requestError}
      workplaces={workplaces}
      onCancel={onCancel}
      onOk={onOk}
    />
  </Modal>
);
