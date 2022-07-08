import React from 'react';
import { useSelector } from 'react-redux';

import { UserPanel } from '@components';

export const UserPanelDataConnector = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      {user && <UserPanel user={user} />}
    </>
  );
};
