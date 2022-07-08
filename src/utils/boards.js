import { NEW_BOARD_KEY } from '@constants';
import { getStorageItem, removeStorageItem, setStorageItem } from '@utils';

export const formatBoards = (boards) => boards.map((board) => ({
  ...board,
  isExpanded: false,
}));

export const getBoardsByPosition = (boards, boardsPosition = []) => {
  const boardsById = boards
    .filter((id) => !!id)
    .reduce((acc, board) => {
      acc[board.id] = board;

      return acc;
    }, {});

  return boardsPosition.map((id) => boardsById[id]);
};

export const getBoardsByColumn = (boards, boardsPosition, columnCount) => {
  const boardsByPosition = getBoardsByPosition(boards, boardsPosition);

  return boardsByPosition.reduce((acc, board, index) => {
    if (!board) return acc;

    const columnIndex = index % columnCount;

    if (acc[columnIndex]) {
      acc[columnIndex].push(board);
    } else {
      acc[columnIndex] = [ board ];
    }

    return acc;
  }, {});
};

export const getFormattedBoardsPosition = (boardsByColumn, columnCount) => Object.values(boardsByColumn)
  .reduce((acc, boardColumn, columnIndex) => {
    boardColumn
      .filter((board) => !!board)
      .forEach((board, boardIndex) => {
        if (board) {
          const index = boardIndex * (columnCount - 1) + columnIndex + boardIndex;
          acc[index] = board.id;
        }
      });

    return acc;
  }, []);

export const setIsBoardFade = (id) => {
  setStorageItem(NEW_BOARD_KEY, id);
  setTimeout(() => removeStorageItem(NEW_BOARD_KEY));
};

export const getIsBoardFade = (id) => Number(getStorageItem(NEW_BOARD_KEY)) === id;
