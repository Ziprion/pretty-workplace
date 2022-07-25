import React from 'react';
import { useSelector } from 'react-redux';

import { DraggableItem, Item } from '@components';

export const ItemStoreConnector = ({ itemId, isDraggable = true, ...rest }) => {
  const item = useSelector((state) => state.items.find(({ id }) => id === itemId));

  return (
    isDraggable
      ? (
        <DraggableItem
          {...item}
          {...rest}
        />
      )
      : <Item {...item} />
  );
};
