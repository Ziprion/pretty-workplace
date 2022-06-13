import React from 'react';

import { Button } from '../button';
import { WarningIcon } from '../icons';
import { Modal } from '../modal';
import {
  ButtonGroup, Feedback, TextGroup, Title,
} from './parts';

export const ConfirmModal = ({
  isShow,
  title,
  onOk,
  onCancel,
  isDisabled,
  requestError,
  cancelText = 'cancel',
  okText = 'ok',
}) => (
  <Modal
    isDisabled={isDisabled}
    isShow={isShow}
    onCancel={onCancel}
  >
    <TextGroup>
      <WarningIcon />
      <Title>{title}</Title>
    </TextGroup>
    <Feedback>{requestError?.status}</Feedback>
    <ButtonGroup>
      <Button
        disabled={isDisabled}
        type="button"
        isSecondary
        onClick={onCancel}
      >
        {cancelText}
      </Button>
      <Button
        disabled={isDisabled}
        type="button"
        onClick={onOk}
      >
        {okText}
      </Button>
    </ButtonGroup>
  </Modal>
);
