import React, { memo, useCallback, useState } from 'react';

import {
  Avatar, Dropdown, LogoutIcon, VerticalMenu,
} from '@components';
import { WithUserHOC } from '@hocs';
import { l } from '@utils';

import { AvatarButton } from './parts';

const ToggleButton = memo(({ user, onClick }) => (
  <AvatarButton onClick={onClick}>
    <Avatar {...user} />
  </AvatarButton>
));

const MenuItems = memo(({ onLogoutClick }) => {
  const menuItems = [
    {
      Icon: LogoutIcon,
      text: l('logoutButtonText'),
      onClick: onLogoutClick,
    },
  ];

  return (
    <VerticalMenu.Wrapper>
      {menuItems.map(({
        Icon, text, onClick, isHide,
      }) => (
        !isHide && (
          <VerticalMenu.Item key={text} onClick={onClick}>
            <Icon />
            {text}
          </VerticalMenu.Item>
        )
      ))}
    </VerticalMenu.Wrapper>
  );
});

export const UserMenu = memo(({ onLogoutCallback }) => {
  const [ isShowDropdown, setShowDropdown ] = useState(false);
  const closeDropdown = useCallback(() => setShowDropdown(() => false), []);
  const toggleDropdown = useCallback(() => setShowDropdown((prev) => !prev), []);

  const onLogoutClick = useCallback(() => {
    closeDropdown();
    onLogoutCallback();
  }, [ onLogoutCallback ]);

  return (
    <Dropdown
      close={closeDropdown}
      isShow={isShowDropdown}
      toggleButton={<WithUserHOC Component={ToggleButton} onClick={toggleDropdown} />}
    >
      <MenuItems onLogoutClick={onLogoutClick} />
    </Dropdown>
  );
});
