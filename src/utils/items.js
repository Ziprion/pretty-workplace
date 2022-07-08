export const getItemsByPosition = (items, itemsPosition = []) => {
  const itemsById = items
    .reduce((acc, item) => {
      acc[item.id] = item;

      return acc;
    }, {});

  return itemsPosition.map((id) => itemsById[id]);
};

export const getItemsByBoardId = (items) => items.reduce((acc, item) => {
  if (acc[item.boardId]) {
    acc[item.boardId].push(item);
  } else {
    acc[item.boardId] = [ item ];
  }

  return acc;
}, {});
