import React, { memo, useCallback, useState } from 'react';

import {
  AddIcon, DeleteIcon, Dropdown, EditIcon, GhostButton, SwitchIcon, VerticalDotsIcon, VerticalMenu,
} from '@components';
import { l } from '@utils';

const ToggleButton = memo(({ onClick }) => (
  <GhostButton isSecondary onClick={onClick}>
    <VerticalDotsIcon />
  </GhostButton>
));

const MenuItems = memo(({
  isHideSwitch, onSwitchClick, onAddClick, onEditClick, onDeleteClick,
}) => {
  const menuItems = [
    {
      Icon: SwitchIcon,
      text: l('switchWorkplaceButtonText'),
      onClick: onSwitchClick,
      isHide: isHideSwitch,
    },
    {
      Icon: AddIcon,
      text: l('addWorkplaceButtonText'),
      onClick: onAddClick,
    },
    {
      Icon: EditIcon,
      text: l('editWorkplaceButtonText'),
      onClick: onEditClick,
    },
    {
      Icon: DeleteIcon,
      text: l('deleteWorkplaceButtonText'),
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

export const WorkplaceMenu = memo(({
  onAddCallback, onDeleteCallback, onEditCallback, onSwitchCallback, isHideSwitch,
}) => {
  const [ isShowDropdown, setShowDropdown ] = useState(false);
  const closeDropdown = useCallback(() => setShowDropdown(() => false), []);
  const toggleDropdown = useCallback(() => setShowDropdown((prev) => !prev), []);

  const onSwitchClick = useCallback(() => {
    closeDropdown();
    onSwitchCallback();
  }, [ onSwitchCallback ]);

  const onAddClick = useCallback(() => {
    closeDropdown();
    onAddCallback();
  }, [ onAddCallback ]);

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
        isHideSwitch={isHideSwitch}
        onAddClick={onAddClick}
        onDeleteClick={onDeleteClick}
        onEditClick={onEditClick}
        onSwitchClick={onSwitchClick}
      />
    </Dropdown>
  );
});
