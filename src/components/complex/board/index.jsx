import React, { useCallback, useEffect, useState } from 'react'; /* eslint no-unused-vars: 0 */
import { Draggable } from 'react-beautiful-dnd';

import { Item } from '@components';
import { AddItemConnector, BoardMenuConnector } from '@connectors';
import { getStorageItem, setStorageItem } from '@utils';

import {
  ActionBar, Body, Header, Title, Wrapper,
} from './parts';

export const Board = ({
  id, title, items = [], index,
}) => {
  const [ isExpanded, setExpanded ] = useState(getStorageItem(id) === 'true');
  const [ isOverflow, setOverflow ] = useState(getStorageItem(id) !== 'true');

  const toggleExpand = useCallback(() => {
    setExpanded((prev) => !prev);

    const currentValue = getStorageItem(id) === 'true';
    setStorageItem(id, !currentValue);
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
      {(provided, snapshot) => (
        <Wrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.draggableProps.style}
        >
          <Header {...provided.dragHandleProps} onClick={toggleExpand}>
            <Title>{title}</Title>
            <ActionBar onClick={(e) => e.stopPropagation()}>
              <AddItemConnector boardId={id} />
              <BoardMenuConnector id={id} title={title} />
            </ActionBar>
          </Header>
          <Body
            isExpanded={isExpanded}
            isOverflow={isOverflow}
            itemCount={items.length}
          >
            {items.map((item) => <Item key={item.id} {...item} />)}
          </Body>
          {provided.placeholder}
        </Wrapper>
      )}
    </Draggable>
  );
};
