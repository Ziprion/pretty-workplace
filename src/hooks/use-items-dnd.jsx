import { useCallback, useEffect, useState } from 'react';

import { addToList, getFormattedItemsPosition, removeFromList } from '@utils';

export const useItemsDnd = (itemsByPosition, onPositionChange) => {
  const [ items, setItems ] = useState(itemsByPosition);

  const onItemsDragEnd = useCallback((result) => {
    if (!result.destination) return;

    const {
      source: {
        index: dragItemIndex,
        droppableId: dragBoardId,
      },
      destination: {
        index: dropItemIndex,
        droppableId: dropBoardId,
      },
    } = result;

    if (dropBoardId !== dragBoardId || dragItemIndex === dropItemIndex) return;

    const itemsCopy = [ ...items ];

    const [ draggedItem, itemsCopyWithoutDraggedItem ] = removeFromList(
      itemsCopy,
      dragItemIndex,
    );

    const updatedItemsCopy = addToList(
      itemsCopyWithoutDraggedItem,
      dropItemIndex,
      draggedItem,
    );

    const updatedItemsPosition = getFormattedItemsPosition(updatedItemsCopy);

    setItems(() => updatedItemsCopy);

    onPositionChange(updatedItemsPosition);
  }, [ items, onPositionChange ]);

  useEffect(() => setItems(() => itemsByPosition), [ itemsByPosition ]);

  return {
    items,
    onItemsDragEnd,
  };
};
