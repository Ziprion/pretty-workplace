import React from 'react'; /* eslint react/no-array-index-key: 0, no-unused-vars: 0 */
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { Board } from '@components';
import { AddWorkplaceConnector } from '@connectors';
import { NEW_BOARD_KEY } from '@constants';
import { useBoardDnd, useColumnParameters } from '@hooks';
import { getStorageItem } from '@utils';

import { BoardColumn, Boards, Wrapper } from './parts';

export const Workplace = ({
  activeWorkplaceId, boardsByPosition, itemsByBoardId, onBoardsPositionChange,
}) => {
  const { columnCount, columnWidth } = useColumnParameters();
  const { boards, onDragEnd } = useBoardDnd(boardsByPosition, columnCount, onBoardsPositionChange);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        {!activeWorkplaceId
          ? <AddWorkplaceConnector />
          : (
            <Boards>
              {[ ...Array(columnCount) ].map((_, columnIndex) => (
                <Droppable key={columnIndex} droppableId={String(columnIndex)}>
                  {(provided, snapshot) => (
                    <BoardColumn
                      key={columnIndex}
                      ref={provided.innerRef}
                      columnCount={columnCount}
                      columnWidth={columnWidth}
                    >
                      {boards && (boards[columnIndex] || [])
                        .map((board, index) => (board && (
                          <Board
                            key={board.id}
                            index={index}
                            isNew={Number(getStorageItem(NEW_BOARD_KEY)) === board.id}
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
          )}
      </Wrapper>
    </DragDropContext>
  );
};
