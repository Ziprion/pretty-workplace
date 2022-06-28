import React from 'react';

import { Modal, WorkplaceForm } from '@components';

export const WorkplaceModal = ({
  isLoading, isShow, title, onCancel, requestError, clearRequestError, onOk, onOkText, initialTitle,
}) => (
  <Modal
    isDisabled={isLoading}
    isShow={isShow}
    title={title}
    onCancel={onCancel}
  >
    <WorkplaceForm
      clearRequestError={clearRequestError}
      initialTitle={initialTitle}
      isLoading={isLoading}
      requestError={requestError}
      onCancel={onCancel}
      onOk={onOk}
      onOkText={onOkText}
    />
  </Modal>
);
