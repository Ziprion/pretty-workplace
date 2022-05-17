import React from 'react';

import { Spinner, Wrapper } from './parts';

export const Loading = ({ size }) => (
  <Wrapper>
    <Spinner size={size} />
  </Wrapper>
);
