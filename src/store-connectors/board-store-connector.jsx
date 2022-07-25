import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { Board } from '@components';

export const BoardStoreConnector = memo(({ id, ...rest }) => {
  const board = useSelector((state) => state.boards.find(({ id: boardId }) => id === boardId));

  return (
    <Board
      {...board}
      {...rest}
    />
  );
});
