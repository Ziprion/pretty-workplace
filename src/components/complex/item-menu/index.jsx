import React, { memo, useCallback, useState } from 'react';

import {
  CopyIcon, DeleteIcon, Dropdown, EditIcon, GhostButton, HorizontalDotsIcon, VerticalMenu,
} from '@components';
import { l } from '@utils';

const ToggleButton = memo(({ onClick }) => (
  <GhostButton isSecondary onClick={onClick}>
    <HorizontalDotsIcon />
  </GhostButton>
));

const MenuItems = memo(({ onCopyClick, onEditClick, onDeleteClick }) => {
  const menuItems = [
    {
      Icon: CopyIcon,
      text: l('copyItemButtonText'),
      onClick: onCopyClick,
    },
    {
      Icon: EditIcon,
      text: l('editItemButtonText'),
      onClick: onEditClick,
    },
    {
      Icon: DeleteIcon,
      text: l('deleteItemButtonText'),
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

export const ItemMenu = memo(({ onCopyCallback, onDeleteCallback, onEditCallback }) => {
  const [ isShowDropdown, setShowDropdown ] = useState(false);
  const closeDropdown = useCallback(() => setShowDropdown(() => false), []);
  const toggleDropdown = useCallback(() => setShowDropdown((prev) => !prev), []);

  const onCopyClick = useCallback(() => {
    closeDropdown();
    onCopyCallback();
  }, [ onCopyCallback ]);

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
      <MenuItems
        onCopyClick={onCopyClick}
        onDeleteClick={onDeleteClick}
        onEditClick={onEditClick}
      />
    </Dropdown>
  );
});
