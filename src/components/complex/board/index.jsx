import React, { memo, useCallback, useMemo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { ChevronDoubleDownIcon } from '@components';
import { AddItemConnector, BoardMenuConnector, ItemsListConnector } from '@connectors';
import { useBoardOverflow } from '@hooks';
import { toggleExpandBoard } from '@redux-store';
import { getItemsByPosition } from '@utils';

import {
  ActionBar, Header, Title, ToggleIcon, Wrapper,
} from './parts';

export const Board = memo(({
  id, title, items = [], itemsPosition, boardIndex, isExpanded, isFade, isChangingBoardsPosition,
}) => {
  const dispatch = useDispatch();

  const { isOverflow } = useBoardOverflow(isExpanded);

  const itemsByPosition = useMemo(() => getItemsByPosition(items, itemsPosition), [ items, itemsPosition ]);

  const toggleExpand = useCallback(() => {
    dispatch(toggleExpandBoard(id));
  }, []);

  return (
    <Draggable
      draggableId={String(id)}
      index={Number(boardIndex)}
    >
      {(provided, snapshot) => (
        <Wrapper
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isFade={isFade}
          {...provided.draggableProps}
          {...provided.draggableProps.style}
        >
          <Header
            {...provided.dragHandleProps}
            onClick={!isChangingBoardsPosition ? toggleExpand : undefined}
          >
            <ToggleIcon isExpanded={isExpanded}>
              <ChevronDoubleDownIcon />
            </ToggleIcon>
            <Title>{title}</Title>
            <ActionBar onClick={(e) => e.stopPropagation()}>
              <AddItemConnector boardId={id} />
              <BoardMenuConnector id={id} title={title} />
            </ActionBar>
          </Header>
          <ItemsListConnector
            boardId={id}
            isExpanded={isExpanded}
            isOverflow={isOverflow}
            itemCount={itemsByPosition.length || 1}
            itemsByPosition={itemsByPosition}
          />
          {provided.placeholder}
        </Wrapper>
      )}
    </Draggable>
  );
});
