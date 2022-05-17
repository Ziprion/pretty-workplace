import React from 'react'; /* eslint no-unused-vars: 0 */
import { Draggable } from 'react-beautiful-dnd';

import { Item } from '@components';
import { AddItemConnector, BoardMenuConnector } from '@connectors';

import {
  ActionBar, Body, Header, Title, Wrapper,
} from './parts';

export const Board = ({
  id, title, items = [], index,
}) => (
  <Draggable key={id} draggableId={String(id)} index={Number(index)}>
    {(provided, snapshot) => (
      <Wrapper
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.draggableProps.style}
      >
        <Header {...provided.dragHandleProps}>
          <Title>{title}</Title>
          <ActionBar>
            <AddItemConnector boardId={id} />
            <BoardMenuConnector id={id} title={title} />
          </ActionBar>
        </Header>
        <Body>
          {items.map((item) => <Item key={item.id} {...item} />)}
        </Body>
        {provided.placeholder}
      </Wrapper>
    )}

  </Draggable>
);
