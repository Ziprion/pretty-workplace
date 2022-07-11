import React from 'react';

import { Logo, UserPanel } from '@components';
import { WithUserHOC } from '@hocs';

import { Wrapper } from './parts';

export const Header = () => (
  <Wrapper>
    <Logo />
    <WithUserHOC Component={UserPanel} />
  </Wrapper>
);
