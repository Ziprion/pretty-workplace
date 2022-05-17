import React from 'react';

import { LogoImage, LogoTitle, LogoWrapper } from './parts';

export const Logo = ({ size }) => (
  <LogoWrapper>
    <LogoImage
      alt="pretty workplace"
      size={size}
      src="images/icons/logo-small.png"
    />
    <LogoTitle>pretty workplace</LogoTitle>
  </LogoWrapper>
);
