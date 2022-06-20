import React, { useState } from 'react';

import {
  Avatar, Dropdown, LogoutIcon, VerticalMenu,
} from '@components';
import { l } from '@utils';

import { AvatarButton } from './parts';

const UserMenuToggle = ({ user, onClick }) => (
  <AvatarButton onClick={onClick}>
    <Avatar {...user} />
  </AvatarButton>
);

export const UserMenu = ({ user, onLogoutCallback }) => {
  const [ isShowDropdown, setShowDropdown ] = useState(false);
  const closeDropdown = () => setShowDropdown(() => false);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const onLogoutClick = () => {
    closeDropdown();
    onLogoutCallback();
  };

  return (
    <Dropdown
      close={closeDropdown}
      isShow={isShowDropdown}
      toggleButton={<UserMenuToggle user={user} onClick={toggleDropdown} />}
    >
      <VerticalMenu.Wrapper>
        <VerticalMenu.Item onClick={onLogoutClick}>
          <LogoutIcon />
          {l('logoutButtonText')}
        </VerticalMenu.Item>
      </VerticalMenu.Wrapper>
    </Dropdown>
  );
};
