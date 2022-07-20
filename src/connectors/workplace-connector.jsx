import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import { updateBoardsPosition } from '@redux-store';
import { WorkplaceStoreConnector } from '@store-connectors';

export const WorkplaceConnector = () => {
  const dispatch = useDispatch();

  const { data, run, loading } = useApiEffect(API_EFFECTS.WORKPLACES.CHANGE_BOARDS_POSITION);

  const onBoardsPositionChange = useCallback((boardsPosition) => {
    run({ boardsPosition });
  }, []);

  useEffect(() => {
    if (data) {
      const { boardsPosition } = data;

      dispatch(updateBoardsPosition(boardsPosition));
    }
  }, [ data ]);

  return (
    <WorkplaceStoreConnector
      isChangingBoardsPosition={loading}
      onBoardsPositionChange={onBoardsPositionChange}
    />
  );
};
