import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MyWorkplaceConnector } from '@connectors';
import { addBoardAction, deleteBoardAction } from '@redux-store';

export const MyWorkplaceDataConnector = () => {
  const dispatch = useDispatch();

  const [ workplaceData, setWorkplaceData ] = useState(null);
  const {
    workplaces, boards, items, activeWorkplaceId,
  } = useSelector((state) => state);

  const itemsByBoard = useMemo(() => items?.reduce((acc, {
    id, title, url, boardId,
  }) => {
    const item = {
      id,
      title,
      url,
    };

    if (acc[boardId]) {
      acc[boardId].push(item);
    } else {
      acc[boardId] = [ item ];
    }
    return acc;
  }, {}), [ items ]);

  const boardsByWorkplace = useMemo(() => boards?.reduce((acc, {
    id, title, workplaceId, boardOrder,
  }) => {
    const board = {
      id,
      title,
      boardOrder,
    };

    if (acc[workplaceId]) {
      acc[workplaceId].push(board);
    } else {
      acc[workplaceId] = [ board ];
    }
    return acc;
  }, {}), [ boards ]);

  useEffect(() => {
    if (workplaces && boardsByWorkplace && itemsByBoard && activeWorkplaceId) {
      const activeWorkplace = workplaces.find((workplace) => workplace.id === activeWorkplaceId);

      const activeWorkplaceData = {
        ...activeWorkplace,
        boards: boardsByWorkplace[activeWorkplace.id]?.map((board) => ({
          ...board,
          items: itemsByBoard[board.id],
        })),
      };

      setWorkplaceData(() => activeWorkplaceData);
    }
  }, [ workplaces, boardsByWorkplace, itemsByBoard, activeWorkplaceId ]);

  const onAddBoard = (addedBoard) => {
    dispatch(addBoardAction(addedBoard));
  };

  const onDeleteBoard = (deletedBoardId) => {
    dispatch(deleteBoardAction(deletedBoardId));
  };

  return (
    <>
      {workplaceData && (
        <MyWorkplaceConnector
          onAddBoard={onAddBoard}
          onDeleteBoard={onDeleteBoard}
          {...workplaceData}
        />
      )}
    </>
  );
};
