import React, { memo, useCallback, useState } from 'react';

import {
  DeleteIcon, Dropdown, EditIcon, GhostButton, HorizontalDotsIcon, VerticalMenu,
} from '@components';
import { l } from '@utils';

const ToggleButton = memo(({ onClick }) => (
  <GhostButton isSecondary onClick={onClick}>
    <HorizontalDotsIcon />
  </GhostButton>
));

const MenuItems = memo(({ onEditClick, onDeleteClick }) => {
  const menuItems = [
    {
      Icon: EditIcon,
      text: l('editBoardButtonText'),
      onClick: onEditClick,
    },
    {
      Icon: DeleteIcon,
      text: l('deleteBoardButtonText'),
      onClick: onDeleteClick,
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

export const BoardMenu = memo(({ onDeleteCallback, onEditCallback }) => {
  const [ isShowDropdown, setShowDropdown ] = useState(false);
  const closeDropdown = useCallback(() => setShowDropdown(() => false), []);
  const toggleDropdown = useCallback(() => setShowDropdown((prev) => !prev), []);

  const onEditClick = useCallback(() => {
    closeDropdown();
    onEditCallback();
  }, [ onEditCallback ]);

  const onDeleteClick = useCallback(() => {
    closeDropdown();
    onDeleteCallback();
  }, [ onDeleteCallback ]);

  return (
    <Dropdown
      close={closeDropdown}
      isShow={isShowDropdown}
      toggleButton={<ToggleButton onClick={toggleDropdown} />}
    >
      <MenuItems onDeleteClick={onDeleteClick} onEditClick={onEditClick} />
    </Dropdown>
  );
});
