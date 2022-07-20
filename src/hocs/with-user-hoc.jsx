import React from 'react';
import { useSelector } from 'react-redux';

export const WithUserHOC = ({ Component, ...props }) => {
  const user = useSelector((state) => state.user);

  return <>{user && <Component user={user} {...props} />}</>;
};
