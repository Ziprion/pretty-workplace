import React from 'react';
import { getInitials } from '@utils';
import { AvatarWrapper, Initials } from './parts';

export const Avatar = ({ lastName, firstName, avatar: { background, url } }) => {
  if (url) {
    return <div>url</div>;
  }

  const initials = getInitials(firstName, lastName);

  return (
    <AvatarWrapper background={background}>
      <Initials>{initials}</Initials>
    </AvatarWrapper>
  );
};
