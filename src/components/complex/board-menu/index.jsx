import React, { useState } from 'react';

import {
  DeleteIcon, Dropdown, EditIcon, GhostButton, HorizontalDotsIcon, VerticalMenu,
} from '@components';
import { l } from '@utils';

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
          {l('editBoardButtonText')}
        </VerticalMenu.Item>
        <VerticalMenu.Item onClick={onDeleteClick}>
          <DeleteIcon />
          {l('deleteBoardButtonText')}
        </VerticalMenu.Item>
      </VerticalMenu.Wrapper>
    </Dropdown>
  );
};
