import React from 'react';

import { UserMenuConnector } from '@connectors';
import { getFullName } from '@utils';

import { UserName, Wrapper } from './parts';

export const UserPanel = ({ user }) => (
  <Wrapper>
    {user && <UserName>{getFullName(user)}</UserName>}
    <UserMenuConnector user={user} />
  </Wrapper>
);
