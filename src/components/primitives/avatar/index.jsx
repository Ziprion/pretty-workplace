import React from 'react';
import { AvatarWrapper, Initials } from './parts';

export const Avatar = ({ initials, background, url }) => {
  if (url) {
    return <div>url</div>;
  }

  return (
    <AvatarWrapper background={background}>
      <Initials>{initials}</Initials>
    </AvatarWrapper>
  );
};
