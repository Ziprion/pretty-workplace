import React, { memo } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { BoardStoreConnector } from '@store-connectors';

import { Wrapper } from './parts';

export const BoardsColumn = memo(({
  boards = [], columnIndex, columnWidth, isChangingBoardsPosition,
}) => (
  <Droppable droppableId={String(columnIndex)}>
    {/* eslint-disable-next-line no-unused-vars */}
    {(provided, snapshot) => (
      <Wrapper
        ref={provided.innerRef}
        columnWidth={columnWidth}
      >
        {boards.map((id, index) => (
          <BoardStoreConnector
            key={id}
            boardIndex={index}
            id={id}
            isChangingBoardsPosition={isChangingBoardsPosition}
          />
        ))}
        {provided.placeholder}
      </Wrapper>
    )}
  </Droppable>
));
