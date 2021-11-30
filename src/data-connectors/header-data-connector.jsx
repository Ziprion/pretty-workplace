import React from 'react';
import { useSelector } from 'react-redux';

export const HeaderDataConnector = () => {
  const headerData = useSelector(({ user }) => user);
  console.log(headerData);

  return (
    <div>Header data</div>
  );
};
