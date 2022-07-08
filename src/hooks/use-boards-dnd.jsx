import { useCallback, useEffect, useState } from 'react';

import {
  addToList, getBoardsByColumn, getFormattedBoardsPosition, removeFromList,
} from '@utils';

export const useBoardsDnd = (boardsByPosition, columnCount, onPositionChange) => {
  const [ boards, setBoards ] = useState({});

  const onDragEnd = useCallback((result) => {
    if (!result.destination) return;

    const {
      source: {
        index: dragBoardIndex,
        droppableId: dragColumnIndex,
      },
      destination: {
        index: dropBoardIndex,
        droppableId: dropColumnIndex,
      },
    } = result;

    if (dragColumnIndex === dropColumnIndex && dragBoardIndex === dropBoardIndex) return;

    const boardsCopy = boards ? { ...boards } : {};

    const sourceList = boardsCopy[dragColumnIndex];

    const [ removedBoard, updatedSourceList ] = removeFromList(
      sourceList,
      dragBoardIndex,
    );

    boardsCopy[dragColumnIndex] = updatedSourceList;

    const destinationList = boardsCopy[dropColumnIndex];

    boardsCopy[dropColumnIndex] = addToList(
      destinationList,
      dropBoardIndex,
      removedBoard,
    );

    const updatedBoardsPosition = getFormattedBoardsPosition(boardsCopy, columnCount);

    setBoards(() => boardsCopy);

    onPositionChange(updatedBoardsPosition);
  }, [ boards, columnCount, onPositionChange ]);

  useEffect(() => columnCount && setBoards(() => getBoardsByColumn(boardsByPosition, columnCount)),
    [ columnCount, boardsByPosition ]);

  return {
    boards,
    onDragEnd,
  };
};
