import React, { useState } from 'react';

import {
  CopyIcon, DeleteIcon, Dropdown, EditIcon, GhostButton, HorizontalDotsIcon, VerticalMenu,
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

export const ItemMenu = ({ onCopyCallback, onDeleteCallback, onEditCallback }) => {
  const [ isShowDropdown, setShowDropdown ] = useState(false);
  const closeDropdown = () => setShowDropdown(() => false);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const onClick = (callback) => (e) => {
    e.preventDefault();
    closeDropdown();
    callback();
  };

  return (
    <Dropdown
      close={closeDropdown}
      isShow={isShowDropdown}
      toggleButton={<ItemMenuToggle onClick={toggleDropdown} />}
    >
      <VerticalMenu.Wrapper>
        <VerticalMenu.Item onClick={onClick(onCopyCallback)}>
          <CopyIcon />
          {l('copyItemButtonText')}
        </VerticalMenu.Item>
        <VerticalMenu.Item onClick={onClick(onEditCallback)}>
          <EditIcon />
          {l('editItemButtonText')}
        </VerticalMenu.Item>
        <VerticalMenu.Item onClick={onClick(onDeleteCallback)}>
          <DeleteIcon />
          {l('deleteItemButtonText')}
        </VerticalMenu.Item>
      </VerticalMenu.Wrapper>
    </Dropdown>
  );
};
