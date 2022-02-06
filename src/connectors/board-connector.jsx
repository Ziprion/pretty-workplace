import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import { BoardPlate } from '@components';
import { STATUSES } from '@constants';
import { addItem, deleteItem } from '@redux-store';

export const BoardConnector = ({ id, ...props }) => {
  const dispatch = useDispatch();
  const { run: createItem, data: addedItem } = useApiEffect(API_EFFECTS.ITEMS.ADD);
  const {
    run: removeItem, status, data: deletedItem,
  } = useApiEffect(API_EFFECTS.ITEMS.DELETE);
  const asd = (data) => createItem({
    ...data,
    boardId: id,
  });

  useEffect(() => {
    if (addedItem) {
      dispatch(addItem(addedItem));
    }
  }, [ addedItem ]);

  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      dispatch(deleteItem(deletedItem));
    }
  }, [ status ]);

  return (
    <BoardPlate
      deleteItem={removeItem}
      addItem={asd}
      id={id}
      {...props}
    />
  );
};
