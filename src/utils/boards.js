import { NEW_BOARD_KEY } from '@constants';
import { getStorageItem, removeStorageItem, setStorageItem } from '@utils';

export const getBoardsByColumn = (boardsPosition, columnCount) => {
  const boardsByColumn = boardsPosition.reduce((acc, boardId, index) => {
    if (!boardId) return acc;

    const columnIndex = index % columnCount;

    if (acc[columnIndex]) {
      acc[columnIndex].push(boardId);
    } else {
      acc[columnIndex] = [ boardId ];
    }

    return acc;
  }, {});

  return [ ...new Array(columnCount) ].reduce((acc, _, index) => {
    acc[index] = boardsByColumn[index] || [];

    return acc;
  }, {});
};

export const getFormattedBoardsPosition = (boardsByColumn, columnCount) => Object.values(boardsByColumn)
  .reduce((acc, boardColumn, columnIndex) => {
    boardColumn
      .filter((boardId) => !!boardId)
      .forEach((boardId, boardIndex) => {
        const index = boardIndex * (columnCount - 1) + columnIndex + boardIndex;
        acc[index] = boardId;
      });

    return acc;
  }, []);

export const setIsBoardFade = (id) => {
  setStorageItem(NEW_BOARD_KEY, id);
  setTimeout(() => removeStorageItem(NEW_BOARD_KEY));
};

export const getIsBoardFade = (id) => Number(getStorageItem(NEW_BOARD_KEY)) === id;
