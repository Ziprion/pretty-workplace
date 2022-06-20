import React, { useState } from 'react';

import {
  DeleteIcon, Dropdown, EditIcon, GhostButton, HorizontalDotsIcon, VerticalMenu,
} from '@components';
import { l } from '@utils';

const ItemMenuToggle = ({ onClick }) => (
  <GhostButton
    isSecondary
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
  >
    <HorizontalDotsIcon />
  </GhostButton>
);

export const ItemMenu = ({ onDeleteCallback, onEditCallback }) => {
  const [ isShowDropdown, setShowDropdown ] = useState(false);
  const closeDropdown = () => setShowDropdown(() => false);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const onEditClick = (e) => {
    e.preventDefault();
    closeDropdown();
    onEditCallback();
  };

  const onDeleteClick = (e) => {
    e.preventDefault();
    closeDropdown();
    onDeleteCallback();
  };

  return (
    <Dropdown
      close={closeDropdown}
      isShow={isShowDropdown}
      toggleButton={<ItemMenuToggle onClick={toggleDropdown} />}
    >
      <VerticalMenu.Wrapper>
        <VerticalMenu.Item onClick={onEditClick}>
          <EditIcon />
          {l('editItemButtonText')}
        </VerticalMenu.Item>
        <VerticalMenu.Item onClick={onDeleteClick}>
          <DeleteIcon />
          {l('deleteItemButtonText')}
        </VerticalMenu.Item>
      </VerticalMenu.Wrapper>
    </Dropdown>
  );
};
