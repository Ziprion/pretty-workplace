import React, { useMemo } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { BoardsColumn } from '@components';
import { useBoardsDnd, useColumnParameters } from '@hooks';
import { getBoardsByColumn, getItemsByBoardId } from '@utils';

import { Wrapper } from './parts';

export const Workplace = ({
  boardsList, items, boardsPosition, isChangingBoardsPosition, onBoardsPositionChange,
}) => {
  const { columnCount, columnWidth } = useColumnParameters();

  const itemsByBoardId = useMemo(() => getItemsByBoardId(items), [ items ]);

  const boardsByColumn = useMemo(() => getBoardsByColumn(boardsList, boardsPosition, columnCount),
    [ boardsList, boardsPosition, columnCount ]);

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
            itemsByBoardId={itemsByBoardId}
          />
        ))}
      </DragDropContext>
    </Wrapper>
  );
};
