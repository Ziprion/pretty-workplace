import React, { useEffect, useRef } from 'react';

import { useOutsideClick } from '@hooks';

import { CloseIcon } from '../icons';
import {
  Body, CloseButton, Mask, Title, Wrapper,
} from './parts';

export const Modal = ({
  isShow, title, onCancel, isDisabled, children,
}) => {
  const modalWrapper = useRef(null);

  useOutsideClick(modalWrapper, onCancel, isDisabled);

  useEffect(() => {
    if (isShow) {
      document.querySelector('html').style.overflow = 'hidden';

      return () => { document.querySelector('html').style.overflow = 'auto'; };
    }
  }, [ isShow ]);

  return isShow && (
    <Mask>
      <Wrapper ref={modalWrapper}>
        <CloseButton
          disabled={isDisabled}
          isSecondary
          onClick={onCancel}
        >
          <CloseIcon />
        </CloseButton>
        <Title>{title}</Title>
        <Body>
          {children}
        </Body>
      </Wrapper>
    </Mask>
  );
};
