import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import { WorkplaceDataConnector } from '@data-connectors';
import { updateBoardsPosition } from '@redux-store';

export const WorkplaceConnector = () => {
  const dispatch = useDispatch();
  const { data, run, loading } = useApiEffect(API_EFFECTS.WORKPLACES.CHANGE_BOARDS_POSITION);

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
    <WorkplaceDataConnector
      isChangingBoardsPosition={loading}
      onBoardsPositionChange={onBoardsPositionChange}
    />
  );
};
