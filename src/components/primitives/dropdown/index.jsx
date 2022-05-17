import React, { useEffect, useRef, useState } from 'react';

import { useOutsideClick } from '@hooks';

import { Content, ContentWrapper, DropdownWrapper } from './parts';

export const Dropdown = ({
  isShow, close, toggleButton, children,
}) => {
  const dropdownWrapper = useRef(null);
  const [ direction, setDirection ] = useState('right');

  useOutsideClick(dropdownWrapper, close);

  useEffect(() => {
    const { right } = dropdownWrapper?.current.getBoundingClientRect();

    setDirection(() => (right + 170 > window.innerWidth ? 'left' : 'right'));
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
