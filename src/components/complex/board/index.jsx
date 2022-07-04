import React, { memo, useCallback } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { ChevronDoubleDownIcon, Item } from '@components';
import { AddItemConnector, BoardMenuConnector } from '@connectors';
import { useBoardOverflow } from '@hooks';
import { toggleExpandBoard } from '@redux-store';

import {
  ActionBar, Body, Header, Title, ToggleIcon, Wrapper,
} from './parts';

export const Board = memo(({
  id, title, items = [], boardIndex, isExpanded, isFade, isChangingBoardsPosition,
}) => {
  const dispatch = useDispatch();

  const { isOverflow } = useBoardOverflow(isExpanded);

  const toggleExpand = useCallback(() => {
    dispatch(toggleExpandBoard(id));
  }, []);

  return (
    <Draggable
      key={id}
      draggableId={String(id)}
      index={Number(boardIndex)}
    >
      {/* eslint-disable-next-line no-unused-vars */}
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
          <Body
            isExpanded={isExpanded}
            isOverflow={isOverflow}
            itemCount={items.length || 1}
          >
            {items.map((item) => <Item key={item.id} {...item} />)}
            {!items.length && <Item key={0} isEmpty />}
          </Body>
          {provided.placeholder}
        </Wrapper>
      )}
    </Draggable>
  );
});
