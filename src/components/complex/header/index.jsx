import React from 'react';
import { Avatar, Logo } from '@components';
import { getFullName } from '@utils';
import { LogoutConnector } from '@connectors';
import {
  Wrapper, UserInfo, UserName,
} from './parts';

export const Header = ({ userInfo }) => (
  <Wrapper>
    <Logo />
    <UserInfo>
      <LogoutConnector />
      <UserName>{getFullName(userInfo)}</UserName>
      <Avatar {...userInfo} />
    </UserInfo>
  </Wrapper>
);
