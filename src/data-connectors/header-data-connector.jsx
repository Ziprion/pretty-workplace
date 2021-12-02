import { Header } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';

export const HeaderDataConnector = () => {
  const userInfo = useSelector(({ user }) => user);

  return (
    <Header userInfo={userInfo} />
  );
};
