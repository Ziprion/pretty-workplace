import React from 'react';

import {
  LogoImage, LogoTitle,
  LogoWrapper,
} from './parts';

export const Logo = () => (
  <LogoWrapper>
    <LogoImage src="images/icons/logo-small.png" alt="logo" />
    <LogoTitle>Pretty Workplace</LogoTitle>
  </LogoWrapper>
);
