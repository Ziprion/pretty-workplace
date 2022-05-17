import React from 'react';

import { Logo } from '@components';
import { UserPanelDataConnector } from '@data-connectors';

import { Wrapper } from './parts';

export const Header = () => (
  <Wrapper>
    <Logo />
    <UserPanelDataConnector />
  </Wrapper>
);
