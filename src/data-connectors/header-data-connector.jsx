import { Header } from '@components';
import React from 'react';
import { useSelector } from 'react-redux';

export const HeaderDataConnector = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      {user && <Header user={user} />}
    </>
  );
};
