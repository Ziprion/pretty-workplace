import React, { useMemo } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { BoardsColumn } from '@components';
import { useBoardsDnd, useColumnParameters } from '@hooks';
import { getBoardsByColumn } from '@utils';

import { Wrapper } from './parts';

export const Workplace = ({ boardsPosition, isChangingBoardsPosition, onBoardsPositionChange }) => {
  const { columnCount, columnWidth } = useColumnParameters();

  const boardsByColumn = useMemo(() => getBoardsByColumn(boardsPosition, columnCount),
    [ boardsPosition, columnCount ]);

  const { boards, onBoardsDragEnd } = useBoardsDnd(boardsByColumn, columnCount, onBoardsPositionChange);

  return (
    <Wrapper>
      <DragDropContext onDragEnd={onBoardsDragEnd}>
        {[ ...Array(columnCount) ].map((_, columnIndex) => (
          <BoardsColumn
            // eslint-disable-next-line react/no-array-index-key
            key={columnIndex}
            boards={boards[columnIndex]}
            columnIndex={columnIndex}
            columnWidth={columnWidth}
            isChangingBoardsPosition={isChangingBoardsPosition}
          />
        ))}
      </DragDropContext>
    </Wrapper>
  );
};
