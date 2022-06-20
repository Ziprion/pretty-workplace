import React from 'react'; /* eslint react/no-array-index-key: 0, no-unused-vars: 0 */
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { Board } from '@components';
import { AddBoardConnector } from '@connectors';
import { useBoardDnd, useColumnCount } from '@hooks';
import { l } from '@utils';

import {
  BoardColumn, Boards, Message, Wrapper,
} from './parts';

export const Workplace = ({
  activeWorkplaceId, boardsByPosition, itemsByBoardId, onBoardsPositionChange,
}) => {
  const { columnCount } = useColumnCount();
  const { boards, onDragEnd } = useBoardDnd(boardsByPosition, columnCount, onBoardsPositionChange);
  const notFoundWorkplaceMessage = l('addWorkplaceMessageText');

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        {!activeWorkplaceId && <Message>{notFoundWorkplaceMessage}</Message>}
        {activeWorkplaceId && !boardsByPosition.length && <div>You do not have boards</div>}
        <Boards>
          {[ ...Array(columnCount) ].map((_, columnIndex) => (
            <Droppable key={columnIndex} droppableId={String(columnIndex)}>
              {(provided, snapshot) => (
                <BoardColumn
                  key={columnIndex}
                  ref={provided.innerRef}
                >
                  {boards && (boards[columnIndex] || [])
                    .map((board, index) => (board && (
                      <Board
                        key={board.id}
                        index={index}
                        items={itemsByBoardId[board.id]}
                        {...board}
                      />
                    )
                    ))}
                  {provided.placeholder}
                </BoardColumn>
              )}
            </Droppable>
          ))}
        </Boards>
        {activeWorkplaceId && boards && <AddBoardConnector activeWorkplaceId={activeWorkplaceId} />}
      </Wrapper>
    </DragDropContext>
  );
};
