import React from 'react';
import { useSelector } from 'react-redux';

import { Greeting } from '@components';

export const GreetingDataConnector = (props) => {
  const { user } = useSelector((state) => state);

  return <Greeting user={user} {...props} />;
};
