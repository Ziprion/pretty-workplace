import React from 'react';

import { getInitials } from '@utils';

import { AvatarWrapper, Initials } from './parts';

export const Avatar = ({ avatarBackground, size, ...user }) => (
  <AvatarWrapper backgroundColor={avatarBackground} size={size}>
    <Initials>{getInitials(user)}</Initials>
  </AvatarWrapper>
);
