export const getBoardsByPosition = (boards, boardsPosition = []) => {
  const boardsById = boards
    .filter((id) => !!id)
    .reduce((acc, board) => {
      acc[board.id] = board;

      return acc;
    }, {});

  return boardsPosition.map((id) => boardsById[id]);
};

export const getBoardsByColumn = (boardsByPosition, columnCount) => {
  const boardsByColumn = boardsByPosition.reduce((acc, board, index) => {
    const columnIndex = index % columnCount;

    if (acc[columnIndex]) {
      acc[columnIndex].push(board);
    } else {
      acc[columnIndex] = [ board ];
    }

    return acc;
  }, {});

  return [ ...new Array(columnCount) ].map((_, index) => boardsByColumn[index] || []);
};

export const getFormattedBoardsPosition = (boardsByColumn, columnCount) => Object.values(boardsByColumn)
  .reduce((acc, boardColumn, columnIndex) => {
    boardColumn.forEach((board, boardIndex) => {
      if (board) {
        const index = boardIndex * (columnCount - 1) + columnIndex + boardIndex;
        acc[index] = board.id;
      }
    });

    return acc;
  }, []);
