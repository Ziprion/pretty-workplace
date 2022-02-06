import React from 'react';
import { useSelector } from 'react-redux';

import { Header } from '@components';

export const HeaderDataConnector = () => {
  const { user } = useSelector((state) => state);

  return (
    <>
      {user && <Header user={user} />}
    </>
  );
};
