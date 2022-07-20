import React, { useMemo } from 'react';

import { UserMenuConnector } from '@connectors';
import { getFullName } from '@utils';

import { UserName, Wrapper } from './parts';

export const UserPanel = ({ user }) => {
  const fullName = useMemo(() => getFullName(user), [ user ]);

  return (
    <Wrapper>
      <UserName>{fullName}</UserName>
      <UserMenuConnector />
    </Wrapper>
  );
};
