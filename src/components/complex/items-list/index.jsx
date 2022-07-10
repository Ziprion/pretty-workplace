import React, { memo } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { DraggableItem, Item } from '@components';
import { useItemsDnd } from '@hooks';
import { l } from '@utils';

import { EmptyWrapper, Wrapper } from './parts';

export const ItemsList = memo(({
  itemsByPosition = [], isExpanded, isOverflow, boardId, onItemsPositionChange,
}) => {
  const { items, onItemsDragEnd } = useItemsDnd(itemsByPosition, onItemsPositionChange);

  const emptyItemMessage = l('emptyBoard');

  return (
    <DragDropContext onDragEnd={onItemsDragEnd}>
      <Droppable droppableId={String(boardId)}>
        {/* eslint-disable-next-line no-unused-vars */}
        {(provided, snapshot) => (
          <Wrapper
            ref={provided.innerRef}
            isExpanded={isExpanded}
            isOverflow={isOverflow}
            itemCount={items.length || 1}
          >
            {!itemsByPosition.length && <EmptyWrapper>{emptyItemMessage}</EmptyWrapper>}
            {items.length > 1 && items
              .filter((item) => !!item)
              .map((item, index) => <DraggableItem key={item.id} itemIndex={index} {...item} />)}
            {items.length === 1 && <Item {...items[0]} />}
            {provided.placeholder}
          </Wrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
});
