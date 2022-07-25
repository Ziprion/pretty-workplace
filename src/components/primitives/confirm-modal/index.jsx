import React, { useEffect } from 'react';

import { l } from '@utils';

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
  clearRequestError,
  cancelText = 'cancelConfirmModalButtonText',
  okText = 'okConfirmModalButtonText',
}) => {
  useEffect(() => {
    if (isShow && requestError) {
      clearRequestError();
    }
  }, [ isShow ]);

  return (
    <Modal
      isDisabled={isDisabled}
      isShow={isShow}
      onCancel={onCancel}
    >
      <TextGroup>
        <WarningIcon />
        <Title>{title}</Title>
      </TextGroup>
      <Feedback>{l(requestError?.message)}</Feedback>
      <ButtonGroup>
        <Button
          disabled={isDisabled}
          type="button"
          isSecondary
          onClick={onCancel}
        >
          {l(cancelText)}
        </Button>
        <Button
          disabled={isDisabled}
          type="button"
          onClick={onOk}
        >
          {l(okText)}
        </Button>
      </ButtonGroup>
    </Modal>
  );
};
