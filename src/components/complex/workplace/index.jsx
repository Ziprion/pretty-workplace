import React from 'react'; /* eslint react/no-array-index-key: 0 */
import { DragDropContext } from 'react-beautiful-dnd';

import { BoardsColumn } from '@components';
import { AddWorkplaceConnector } from '@connectors';
import { useBoardDnd, useColumnParameters } from '@hooks';

import { Wrapper } from './parts';

export const Workplace = ({
  activeWorkplaceId, boardsByPosition, itemsByBoardId, onBoardsPositionChange, isChangingBoardsPosition,
}) => {
  const { columnCount, columnWidth } = useColumnParameters();
  const { boards, onDragEnd } = useBoardDnd(boardsByPosition, columnCount, onBoardsPositionChange);

  return (
    <Wrapper>
      {!activeWorkplaceId
        ? <AddWorkplaceConnector />
        : (
          <DragDropContext onDragEnd={onDragEnd}>
            {[ ...Array(columnCount) ].map((_, columnIndex) => (
              <BoardsColumn
                key={columnIndex}
                boards={boards[columnIndex]}
                columnIndex={columnIndex}
                columnWidth={columnWidth}
                isChangingBoardsPosition={isChangingBoardsPosition}
                itemsByBoardId={itemsByBoardId}
              />
            ))}
          </DragDropContext>
        )}
    </Wrapper>
  );
};
