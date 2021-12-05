import React from 'react';
import { Avatar, Logo } from '@components';
import { getFullName } from '@utils';
import { LogoutConnector } from '@connectors';
import {
  Wrapper, UserInfo, UserName,
} from './parts';

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
