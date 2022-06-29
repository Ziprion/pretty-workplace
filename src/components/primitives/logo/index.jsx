import React from 'react';
import { useDispatch } from 'react-redux';

import { collapseAllBoards } from '@redux-store';

import { LogoImage, LogoTitle, LogoWrapper } from './parts';

export const Logo = ({ size }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(collapseAllBoards());
  };

  return (
    <LogoWrapper onClick={onClick}>
      <LogoImage
        alt="pretty workplace"
        size={size}
        src="images/icons/logo-small.png"
      />
      <LogoTitle>pretty workplace</LogoTitle>
    </LogoWrapper>
  );
};
