import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { Workplace } from '@components';
import { AddWorkplaceConnector } from '@connectors';
import { useColumnParameters } from '@hooks';
import { getBoardsByColumn, getItemsByBoardId } from '@utils';

export const WorkplaceDataConnector = ({ isChangingBoardsPosition, onBoardsPositionChange }) => {
  const {
    boards,
    items,
    activeWorkplace: {
      id: activeWorkplaceId,
      boardsPosition,
    },
  } = useSelector((state) => state);

  const { columnCount, columnWidth } = useColumnParameters();

  const itemsByBoardId = useMemo(() => getItemsByBoardId(items), [ items ]);

  const boardsByColumn = useMemo(() => getBoardsByColumn(boards, boardsPosition, columnCount),
    [ boards, boardsPosition, columnCount ]);

  return (
    activeWorkplaceId
      ? (
        <Workplace
          boardsByColumn={boardsByColumn}
          columnCount={columnCount}
          columnWidth={columnWidth}
          isChangingBoardsPosition={isChangingBoardsPosition}
          itemsByBoardId={itemsByBoardId}
          onBoardsPositionChange={onBoardsPositionChange}
        />
      )
      : <AddWorkplaceConnector />
  );
};
