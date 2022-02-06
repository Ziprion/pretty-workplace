import React, { useEffect } from 'react';

import {
  Body, CloseButton,
  Mask, Title, Wrapper,
} from './parts';

export const Modal = ({
  isShow, title, onCancel, disabled, children,
}) => {
  const outerClick = (e) => (e?.target?.dataset?.role === 'modal-outer' && !disabled ? onCancel() : undefined);

  useEffect(() => {
    document.querySelector('html').style.overflow = isShow ? 'hidden' : 'auto';
  }, [ isShow ]);

  return isShow && (
    <Mask
      isShow={isShow}
      onClick={outerClick}
      data-role="modal-outer"
    >
      <Wrapper>
        <CloseButton onClick={onCancel} disabled={disabled}>X</CloseButton>
        <Title>{title}</Title>
        <Body>
          {children}
        </Body>
      </Wrapper>
    </Mask>
  );
};
