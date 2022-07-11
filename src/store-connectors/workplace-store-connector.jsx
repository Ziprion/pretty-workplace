import React from 'react';
import { useSelector } from 'react-redux';

import { Workplace } from '@components';
import { AddWorkplaceConnector } from '@connectors';

export const WorkplaceStoreConnector = (props) => {
  const {
    boards,
    items,
    activeWorkplace: {
      id: activeWorkplaceId,
      boardsPosition,
    },
  } = useSelector((state) => state);

  return (
    activeWorkplaceId
      ? (
        <Workplace
          boardsList={boards}
          boardsPosition={boardsPosition}
          items={items}
          {...props}
        />
      )
      : <AddWorkplaceConnector />
  );
};
