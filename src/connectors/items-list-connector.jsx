import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import { ItemsList } from '@components';
import { updateItemsPosition } from '@redux-store';

export const ItemsListConnector = memo(({ boardId, ...rest }) => {
  const dispatch = useDispatch();

  const { data, run } = useApiEffect(API_EFFECTS.BOARDS.CHANGE_ITEMS_POSITION);

  const onItemsPositionChange = useCallback((itemsPosition) => {
    run({
      id: boardId,
      itemsPosition,
    });
  }, [ boardId ]);

  useEffect(() => {
    if (data) {
      dispatch(updateItemsPosition({
        boardId,
        itemsPosition: data,
      }));
    }
  }, [ data ]);

  return (
    <ItemsList
      boardId={boardId}
      onItemsPositionChange={onItemsPositionChange}
      {...rest}
    />
  );
});
