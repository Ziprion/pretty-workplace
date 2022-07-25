import React from 'react';
import { useSelector } from 'react-redux';

import { Workplace } from '@components';
import { AddWorkplaceConnector } from '@connectors';

export const WorkplaceStoreConnector = (props) => {
  const activeWorkplaceId = useSelector((state) => state.activeWorkplace.id);
  const boardsPosition = useSelector((state) => state.activeWorkplace.boardsPosition);

  return (
    activeWorkplaceId
      ? (
        <Workplace
          boardsPosition={boardsPosition}
          {...props}
        />
      )
      : <AddWorkplaceConnector />
  );
};
