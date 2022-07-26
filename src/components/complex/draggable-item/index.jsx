import React, { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { Item } from '@components';

import { Wrapper } from './parts';

export const DraggableItem = memo(({ id, itemIndex, ...rest }) => (
  <Draggable
    draggableId={String(id)}
    index={Number(itemIndex)}
  >
    {(provided, snapshot) => (
      <Wrapper
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
        {...provided.draggableProps}
        {...provided.draggableProps.style}
        {...provided.dragHandleProps}
      >
        <Item
          id={id}
          {...rest}
        />
        {provided.placeholder}
      </Wrapper>
    )}
  </Draggable>
));
