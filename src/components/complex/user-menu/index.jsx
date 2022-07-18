import React, { memo, useCallback, useState } from 'react';

import {
  Avatar, Dropdown, LogoutIcon, VerticalMenu,
} from '@components';
import { WithUserHOC } from '@hocs';
import { l } from '@utils';

import { AvatarButton } from './parts';

const UserMenuToggle = memo(({ user, onClick }) => (
  <AvatarButton onClick={onClick}>
    <Avatar {...user} />
  </AvatarButton>
));

export const UserMenu = memo(({ onLogoutCallback }) => {
  const [ isShowDropdown, setShowDropdown ] = useState(false);
  const closeDropdown = () => setShowDropdown(() => false);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const onLogoutClick = useCallback(() => {
    closeDropdown();
    onLogoutCallback();
  }, []);

  return (
    <Dropdown
      close={closeDropdown}
      isShow={isShowDropdown}
      toggleButton={<WithUserHOC Component={UserMenuToggle} onClick={toggleDropdown} />}
    >
      <VerticalMenu.Wrapper>
        <VerticalMenu.Item onClick={onLogoutClick}>
          <LogoutIcon />
          {l('logoutButtonText')}
        </VerticalMenu.Item>
      </VerticalMenu.Wrapper>
    </Dropdown>
  );
});
