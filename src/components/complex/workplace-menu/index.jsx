import React, { useState } from 'react';

import {
  DeleteIcon, DotsIcon, Dropdown, EditIcon, GhostButton, VerticalMenu,
} from '@components';

const WorkplaceMenuToggle = ({ onClick }) => (
  <GhostButton isSecondary onClick={onClick}>
    <DotsIcon />
  </GhostButton>
);

export const WorkplaceMenu = ({ onDeleteCallback, onEditCallback }) => {
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
      toggleButton={<WorkplaceMenuToggle onClick={toggleDropdown} />}
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
