import React, { useCallback, useEffect, useState } from 'react'; /* eslint no-unused-vars: 0 */
import { Draggable } from 'react-beautiful-dnd';

import { ChevronDoubleDownIcon, Item } from '@components';
import { AddItemConnector, BoardMenuConnector } from '@connectors';
import { DEFAULT_NEW_BOARD, NEW_BOARD_KEY } from '@constants';
import { getStorageItem, setStorageItem } from '@utils';

import {
  ActionBar, Body, Header, Title, ToggleIcon, Wrapper,
} from './parts';

export const Board = ({
  id, title, items = [], index,
}) => {
  const [ isExpanded, setExpanded ] = useState(false);
  const [ isOverflow, setOverflow ] = useState(true);
  const [ isNew ] = useState(Number(getStorageItem(NEW_BOARD_KEY)) === id);

  const toggleExpand = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line functional/no-let
    let timer;

    if (isNew) {
      timer = setTimeout(() => setStorageItem(NEW_BOARD_KEY, DEFAULT_NEW_BOARD));
    } else {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [ isNew ]);

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
};
