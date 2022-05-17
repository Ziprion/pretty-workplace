import React, { useState } from 'react';

import {
  DeleteIcon, Dropdown, EditIcon, GhostButton, HorizontalDotsIcon, VerticalMenu,
} from '@components';

const BoardMenuToggle = ({ onClick }) => (
  <GhostButton isSecondary onClick={onClick}>
    <HorizontalDotsIcon />
  </GhostButton>
);

export const BoardMenu = ({ onDeleteCallback, onEditCallback }) => {
  const [ isShowDropdown, setShowDropdown ] = useState(false);
  const closeDropdown = () => setShowDropdown(() => false);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const onEditClick = () => {
    closeDropdown();
    onEditCallback();
  };

  const onDeleteClick = () => {
    closeDropdown();
    onDeleteCallback();
  };

  return (
    <Dropdown
      close={closeDropdown}
      isShow={isShowDropdown}
      toggleButton={<BoardMenuToggle onClick={toggleDropdown} />}
    >
      <VerticalMenu.Wrapper>
        <VerticalMenu.Item onClick={onEditClick}>
          <EditIcon />
          edit
        </VerticalMenu.Item>
        <VerticalMenu.Item onClick={onDeleteClick}>
          <DeleteIcon />
          delete
        </VerticalMenu.Item>
      </VerticalMenu.Wrapper>
    </Dropdown>
  );
};
