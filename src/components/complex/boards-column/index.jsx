import React from 'react'; /* eslint react/no-array-index-key: 0, no-unused-vars: 0 */
import { Droppable } from 'react-beautiful-dnd';

import { Board } from '@components';
import { getIsBoardFade } from '@utils';

import { Wrapper } from './parts';

export const BoardsColumn = ({
  boards = [], columnIndex, columnWidth, itemsByBoardId, isChangingBoardsPosition,
}) => (
  <Droppable droppableId={String(columnIndex)}>
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
);
