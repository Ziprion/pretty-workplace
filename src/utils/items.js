export const getItemsByBoardId = (items) => items.reduce((acc, item) => {
  if (acc[item.boardId]) {
    acc[item.boardId].push(item);
  } else {
    acc[item.boardId] = [ item ];
  }

  return acc;
}, {});
