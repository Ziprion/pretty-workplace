import React, { memo } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { useItemsDnd } from '@hooks';
import { ItemStoreConnector } from '@store-connectors';
import { l } from '@utils';

import { EmptyWrapper, Wrapper } from './parts';

export const ItemsList = memo(({
  itemsPosition, boardId, onItemsPositionChange,
}) => {
  const { items, onItemsDragEnd } = useItemsDnd(itemsPosition, onItemsPositionChange);

  const emptyItemMessage = l('emptyBoard');

  return (
    <DragDropContext onDragEnd={onItemsDragEnd}>
      <Droppable droppableId={String(boardId)}>
        {/* eslint-disable-next-line no-unused-vars */}
        {(provided, snapshot) => (
          <Wrapper
            ref={provided.innerRef}
          >
            {!items.length && <EmptyWrapper>{emptyItemMessage}</EmptyWrapper>}
            {items.length > 1 && items
              .map((itemId, index) => <ItemStoreConnector key={itemId} itemId={itemId} itemIndex={index} />)}
            {items.length === 1 && <ItemStoreConnector isDraggable={false} itemId={items[0]} />}
            {provided.placeholder}
          </Wrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
});
