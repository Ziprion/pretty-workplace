import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { WorkplacesPanel } from '@components';
import { WorkplaceConnector } from '@connectors';
import { getBoardsByPosition, getItemsByBoardId } from '@utils';

export const WorkplaceDataConnector = () => {
  const {
    boards,
    items,
    workplaces,
    activeWorkplace: {
      id: activeWorkplaceId,
      title: activeWorkplaceTitle,
      boardsPosition,
    },
  } = useSelector((state) => state);

  const boardsByPosition = useMemo(() => getBoardsByPosition(boards, boardsPosition), [ boards, boardsPosition ]);
  const itemsByBoardId = useMemo(() => getItemsByBoardId(items), [ items ]);

  return (
    <>
      <WorkplacesPanel
        activeWorkplaceId={activeWorkplaceId}
        activeWorkplaceTitle={activeWorkplaceTitle}
        workplaces={workplaces}
      />
      <WorkplaceConnector
        activeWorkplaceId={activeWorkplaceId}
        boardsByPosition={boardsByPosition}
        itemsByBoardId={itemsByBoardId}
      />
    </>
  );
};
