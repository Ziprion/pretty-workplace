import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

import { useOutsideClick } from '@hooks';

import { Content, ContentWrapper, DropdownWrapper } from './parts';

export const Dropdown = ({
  isShow, close, toggleButton, children,
}) => {
  const dropdownWrapper = useRef(null);
  const [ direction, setDirection ] = useState('right');

  const setDropdownDirection = useCallback(() => {
    const { right } = dropdownWrapper?.current.getBoundingClientRect();
    setDirection(() => (right + 170 > window.innerWidth ? 'left' : 'right'));
  }, []);

  useOutsideClick(dropdownWrapper, close);

  useEffect(() => {
    setDropdownDirection();

    window.addEventListener('resize', setDropdownDirection);

    return () => window.removeEventListener('resize', setDropdownDirection);
  }, []);

  return (
    <DropdownWrapper ref={dropdownWrapper}>
      {toggleButton}
      <ContentWrapper>
        <Content direction={direction} isOpen={isShow}>
          {children}
        </Content>
      </ContentWrapper>
    </DropdownWrapper>
  );
};
