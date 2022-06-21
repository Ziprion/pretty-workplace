import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import { Workplace } from '@components';
import { updateBoardsPosition } from '@redux-store';

export const WorkplaceConnector = (props) => {
  const dispatch = useDispatch();
  const { data, run } = useApiEffect(API_EFFECTS.WORKPLACES.CHANGE_BOARDS_POSITION);

  const onBoardsPositionChange = (boardsPosition) => {
    run({ boardsPosition });
  };

  useEffect(() => {
    if (data) {
      const { boardsPosition } = data;

      dispatch(updateBoardsPosition(boardsPosition));
    }
  }, [ data ]);

  return (
    <Workplace
      onBoardsPositionChange={onBoardsPositionChange}
      {...props}
    />
  );
};
