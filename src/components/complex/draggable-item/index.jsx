import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { Item } from '@components';

export const DraggableItem = ({ id, itemIndex, ...rest }) => (
  <Draggable
    draggableId={String(id)}
    index={Number(itemIndex)}
  >
    {(provided, snapshot) => (
      <Item
        dragRef={provided.innerRef}
        id={id}
        isDragging={snapshot.isDragging}
        placeholder={provided.placeholder}
        {...provided.draggableProps}
        {...provided.draggableProps.style}
        {...provided.dragHandleProps}
        {...rest}
      />
    )}
  </Draggable>
);
