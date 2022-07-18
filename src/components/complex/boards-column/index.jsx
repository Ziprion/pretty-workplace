import React, { memo } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { Board } from '@components';
import { getIsBoardFade } from '@utils';

import { Wrapper } from './parts';

export const BoardsColumn = memo(({
  boards = [], columnIndex, columnWidth, isChangingBoardsPosition, itemsByBoardId,
}) => (
  <Droppable droppableId={String(columnIndex)}>
    {/* eslint-disable-next-line no-unused-vars */}
    {(provided, snapshot) => (
      <Wrapper
        ref={provided.innerRef}
        columnWidth={columnWidth}
      >
        {boards.map(({ id, ...rest }, index) => (
          <Board
            key={id}
            boardIndex={index}
            id={id}
            isChangingBoardsPosition={isChangingBoardsPosition}
            isFade={getIsBoardFade(id)}
            items={itemsByBoardId[id]}
            {...rest}
          />
        ))}
        {provided.placeholder}
      </Wrapper>
    )}
  </Droppable>
));
