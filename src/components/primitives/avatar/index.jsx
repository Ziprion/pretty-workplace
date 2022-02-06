import React from 'react';

import { getInitials } from '@utils';

import { AvatarWrapper, Initials } from './parts';

export const Avatar = ({
  lastName,
  firstName,
  avatarBackground,
  avatarUrl,
}) => {
  if (avatarUrl) {
    return <div>url</div>;
  }

  const initials = getInitials(firstName, lastName);

  return (
    <AvatarWrapper background={avatarBackground}>
      <Initials>{initials}</Initials>
    </AvatarWrapper>
  );
};
