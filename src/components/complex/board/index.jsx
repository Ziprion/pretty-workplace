import React, { memo, useCallback, useMemo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { ChevronDoubleDownIcon } from '@components';
import { AddItemConnector, BoardMenuConnector, ItemsListConnector } from '@connectors';
import { useBoardOverflow } from '@hooks';
import { toggleExpandBoard } from '@redux-store';
import { getIsBoardFade } from '@utils';

import {
  ActionBar, Body, Header, Title, ToggleIcon, Wrapper,
} from './parts';

const HeaderToggleIcon = memo(({ isExpanded }) => (
  <ToggleIcon isExpanded={isExpanded}>
    <ChevronDoubleDownIcon />
  </ToggleIcon>
));

const HeaderTitle = memo(({ title }) => (
  <Title>{title}</Title>
));

const HeaderActionBar = memo(({ onClick, id, title }) => (
  <ActionBar onClick={onClick}>
    <AddItemConnector boardId={id} />
    <BoardMenuConnector id={id} title={title} />
  </ActionBar>
));

export const Board = memo(({
  id, title, itemsPosition = [], boardIndex, isExpanded, isChangingBoardsPosition,
}) => {
  const dispatch = useDispatch();

  const { isOverflow } = useBoardOverflow(isExpanded);

  const isFade = useMemo(() => getIsBoardFade(id), [ id ]);

  const toggleExpand = useCallback(() => {
    if (!isChangingBoardsPosition) {
      dispatch(toggleExpandBoard(id));
    }
  }, [ id, isChangingBoardsPosition ]);

  const stopPropagation = useCallback((e) => e.stopPropagation(), []);

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
            onClick={toggleExpand}
          >
            <HeaderToggleIcon isExpanded={isExpanded} />
            <HeaderTitle title={title} />
            <HeaderActionBar
              id={id}
              title={title}
              onClick={stopPropagation}
            />
          </Header>
          <Body
            isExpanded={isExpanded}
            isOverflow={isOverflow}
            itemCount={itemsPosition.length || 1}
          >
            <ItemsListConnector
              boardId={id}
              itemsPosition={itemsPosition}
            />
          </Body>
          {provided.placeholder}
        </Wrapper>
      )}
    </Draggable>
  );
});
