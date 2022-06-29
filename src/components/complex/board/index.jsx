import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { ChevronDoubleDownIcon, Item } from '@components';
import { AddItemConnector, BoardMenuConnector } from '@connectors';
import { NEW_BOARD_KEY } from '@constants';
import { toggleExpandBoard } from '@redux-store';
import { removeStorageItem } from '@utils';

import {
  ActionBar, Body, Header, Title, ToggleIcon, Wrapper,
} from './parts';

export const Board = memo(({
  id, title, items = [], index, isExpanded, isNew,
}) => {
  const dispatch = useDispatch();

  const [ isOverflow, setOverflow ] = useState(!isExpanded);

  const toggleExpand = useCallback(() => {
    dispatch(toggleExpandBoard(id));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line functional/no-let
    let timer;

    if (isNew) {
      timer = setTimeout(() => removeStorageItem(NEW_BOARD_KEY));
    }

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line functional/no-let
    let timer;

    if (isExpanded) {
      timer = setTimeout(() => setOverflow(false), 200);
    } else {
      clearTimeout(timer);
      setOverflow(true);
    }

    return () => clearTimeout(timer);
  }, [ isExpanded ]);

  return (
    <Draggable
      key={id}
      draggableId={String(id)}
      index={Number(index)}
    >
      {/* eslint-disable-next-line no-unused-vars */}
      {(provided, snapshot) => (
        <Wrapper
          ref={provided.innerRef}
          isNew={isNew}
          {...provided.draggableProps}
          {...provided.draggableProps.style}
        >
          <Header {...provided.dragHandleProps} onClick={toggleExpand}>
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
