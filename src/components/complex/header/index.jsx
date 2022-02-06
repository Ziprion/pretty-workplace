import React from 'react';

import { Avatar, Logo } from '@components';
import { LogoutConnector } from '@connectors';
import { getFullName } from '@utils';

import { UserInfo, UserName, Wrapper } from './parts';

export const Header = ({ user }) => (
  <Wrapper>
    <Logo />
    <UserInfo>
      <LogoutConnector />
      <UserName>{getFullName(user)}</UserName>
      <Avatar {...user} />
    </UserInfo>
  </Wrapper>
);
