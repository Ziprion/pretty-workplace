import { Header } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';

export const HeaderDataConnector = () => {
  const userData = useSelector(({ user }) => user);
  console.log(userData);

  return (
    <Header {...userData} />
  );
};
