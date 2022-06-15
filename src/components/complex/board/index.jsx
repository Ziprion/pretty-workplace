import React, { useEffect, useState } from 'react'; /* eslint no-unused-vars: 0 */
import { Draggable } from 'react-beautiful-dnd';

import { Item } from '@components';
import { AddItemConnector, BoardMenuConnector } from '@connectors';

import {
  ActionBar, Body, Header, Title, Wrapper,
} from './parts';

export const Board = ({
  id, title, items = [], index,
}) => {
  const [ isRendered, setRendered ] = useState(false);
  const [ isExpanded, setExpanded ] = useState(false);
  const [ isOverflow, setOverflow ] = useState(false);

  const toggleExpand = () => setExpanded((prev) => !prev);

  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => setOverflow((prev) => !prev), isExpanded ? 200 : 0);
    } else {
      setOverflow((prev) => !prev);
    }

    if (!isRendered) {
      setRendered(true);
    }
  }, [ isExpanded ]);

  return (
    <>
      {isRendered && (
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
              <ActionBar>
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
      )}
    </>
  );
};
