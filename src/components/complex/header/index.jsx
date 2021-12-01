import React from 'react';
import { Avatar } from 'components';
import {
  HeaderWrapper, LogoWrapper, UserInfo, UserName,
} from './parts';

export const Header = ({ lastName, firstName, avatar }) => {
  console.log('header');
  const initials = `${firstName[0]}${lastName[0]}`;

  return (
    <HeaderWrapper>
      <LogoWrapper>Pretty Workplace</LogoWrapper>
      <UserInfo>
        <UserName>{`${firstName} ${lastName}`}</UserName>
        <Avatar initials={initials} {...avatar} />
      </UserInfo>
    </HeaderWrapper>
  );
};
