import React from 'react';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import { Workplace } from '@components';

export const WorkplaceConnector = (props) => {
  const { run } = useApiEffect(API_EFFECTS.WORKPLACES.CHANGE_BOARDS_POSITION);

  const onBoardsPositionChange = (boardsPosition) => run({ boardsPosition });

  return (
    <Workplace
      onBoardsPositionChange={onBoardsPositionChange}
      {...props}
    />
  );
};
