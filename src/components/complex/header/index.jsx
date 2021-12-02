import React from 'react';
import { Avatar } from 'components';
import {
  Wrapper, Logo, UserInfo, UserName,
} from './parts';

export const Header = ({ lastName, firstName, avatar }) => {
  const initials = `${firstName[0]}${lastName[0]}`;

  return (
    <Wrapper>
      <Logo>Pretty Workplace</Logo>
      <UserInfo>
        <UserName>{`${firstName} ${lastName}`}</UserName>
        <Avatar initials={initials} {...avatar} />
      </UserInfo>
    </Wrapper>
  );
};
