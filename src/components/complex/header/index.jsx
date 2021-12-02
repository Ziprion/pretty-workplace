import React from 'react';
import { Avatar } from 'components';
import { getFullName } from 'utils';
import {
  Wrapper, Logo, UserInfo, UserName, LogoImage, LogoTitle,
} from './parts';

export const Header = ({ userInfo }) => (
  <Wrapper>
    <Logo>
      <LogoImage src="images/icons/logo-small.png" alt="logo" />
      <LogoTitle>Pretty Workplace</LogoTitle>
    </Logo>
    <UserInfo>
      <UserName>{getFullName(userInfo)}</UserName>
      <Avatar {...userInfo} />
    </UserInfo>
  </Wrapper>
);
