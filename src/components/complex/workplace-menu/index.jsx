import React, { useState } from 'react';

import {
  DeleteIcon, Dropdown, EditIcon, GhostButton, VerticalDotsIcon, VerticalMenu,
} from '@components';
import { l } from '@utils';

const WorkplaceMenuToggle = ({ onClick }) => (
  <GhostButton isSecondary onClick={onClick}>
    <VerticalDotsIcon />
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
          {l('editWorkplaceButtonText')}
        </VerticalMenu.Item>
        <VerticalMenu.Item onClick={onDeleteClick}>
          <DeleteIcon />
          {l('deleteWorkplaceButtonText')}
        </VerticalMenu.Item>
      </VerticalMenu.Wrapper>
    </Dropdown>
  );
};
