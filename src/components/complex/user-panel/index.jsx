import React, { memo } from 'react';

import { UserMenuConnector } from '@connectors';
import { getFullName } from '@utils';

import { UserName, Wrapper } from './parts';

export const UserPanel = memo(({ user }) => (
  <Wrapper>
    {user && <UserName>{getFullName(user)}</UserName>}
    <UserMenuConnector />
  </Wrapper>
));
