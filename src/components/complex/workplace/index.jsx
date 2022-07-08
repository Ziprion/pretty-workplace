import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { BoardsColumn } from '@components';
import { useBoardsDnd } from '@hooks';

import { Wrapper } from './parts';

export const Workplace = ({
  boardsByColumn, itemsByBoardId, isChangingBoardsPosition, columnWidth, columnCount, onBoardsPositionChange,
}) => {
  const { boards, onDragEnd } = useBoardsDnd(boardsByColumn, columnCount, onBoardsPositionChange);

  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(boards).map(([ columnIndex, columnBoards ]) => (
          <BoardsColumn
            key={columnIndex}
            boards={columnBoards}
            columnIndex={columnIndex}
            columnWidth={columnWidth}
            isChangingBoardsPosition={isChangingBoardsPosition}
            itemsByBoardId={itemsByBoardId}
          />
        ))}
      </DragDropContext>
    </Wrapper>
  );
};
