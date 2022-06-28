import React, { useState } from 'react';

import {
  AddIcon, DeleteIcon, Dropdown, EditIcon, GhostButton, SwitchIcon, VerticalDotsIcon, VerticalMenu,
} from '@components';
import { l } from '@utils';

const WorkplaceMenuToggle = ({ onClick }) => (
  <GhostButton isSecondary onClick={onClick}>
    <VerticalDotsIcon />
  </GhostButton>
);

export const WorkplaceMenu = ({
  onAddCallback, onDeleteCallback, onEditCallback, onSwitchCallback, workplaces,
}) => {
  const [ isShowDropdown, setShowDropdown ] = useState(false);
  const closeDropdown = () => setShowDropdown(() => false);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const onSwitchClick = () => {
    closeDropdown();
    onSwitchCallback();
  };

  const onAddClick = () => {
    closeDropdown();
    onAddCallback();
  };

  const onEditClick = () => {
    closeDropdown();
    onEditCallback();
  };

  const onDeleteClick = () => {
    closeDropdown();
    onDeleteCallback();
  };

  const switchButtonText = l('switchWorkplaceButtonText');
  const addButtonText = l('addWorkplaceButtonText');
  const editButtonText = l('editWorkplaceButtonText');
  const deleteButtonText = l('deleteWorkplaceButtonText');

  return (
    <Dropdown
      close={closeDropdown}
      isShow={isShowDropdown}
      toggleButton={<WorkplaceMenuToggle onClick={toggleDropdown} />}
    >
      <VerticalMenu.Wrapper>
        {workplaces.length > 1 && (
          <VerticalMenu.Item onClick={onSwitchClick}>
            <SwitchIcon />
            {switchButtonText}
          </VerticalMenu.Item>
        )}
        <VerticalMenu.Item onClick={onAddClick}>
          <AddIcon />
          {addButtonText}
        </VerticalMenu.Item>
        <VerticalMenu.Item onClick={onEditClick}>
          <EditIcon />
          {editButtonText}
        </VerticalMenu.Item>
        <VerticalMenu.Item onClick={onDeleteClick}>
          <DeleteIcon />
          {deleteButtonText}
        </VerticalMenu.Item>
      </VerticalMenu.Wrapper>
    </Dropdown>
  );
};
