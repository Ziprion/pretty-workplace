import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0, import/no-cycle: 0 */
import { formatBoards } from '@utils';

import { setActiveWorkplace } from './activeWorkplaceSlice';
import { addItem, deleteItem } from './itemsSlice';
import { cleanup } from './userSlice';

const initialState = [];

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addBoard: (state, { payload }) => ([ ...state, payload ]),
    editBoard: (state, { payload: { id, title } }) => {
      const editedBoard = state.find((board) => board.id === id);
      editedBoard.title = title;
    },
    deleteBoard: (state, { payload }) => state.filter(({ id }) => id !== payload),
    toggleExpandBoard: (state, { payload }) => {
      const currentBoard = state.find(({ id }) => id === payload);
      const currentStatus = currentBoard.isExpanded;
      currentBoard.isExpanded = !currentStatus;
    },
    collapseAllBoards: (state) => {
      state.forEach((board) => {
        board.isExpanded = false;
      });
    },
    updateItemsPosition: (state, { payload: { boardId, itemsPosition } }) => {
      const currentBoard = state.find(({ id }) => id === boardId);
      currentBoard.itemsPosition = itemsPosition;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setActiveWorkplace, (_, { payload: { boards } }) => formatBoards(boards));
    builder.addCase(addItem, (state, { payload: { id: itemId, boardId } }) => {
      const currentBoard = state.find(({ id }) => id === boardId);
      currentBoard.itemsPosition.push(itemId);
    });
    builder.addCase(deleteItem, (state, { payload: { boardId, itemId } }) => {
      const currentBoard = state.find(({ id }) => id === boardId);
      currentBoard.itemsPosition = currentBoard.itemsPosition.filter((id) => itemId !== id);
    });
    builder.addCase(cleanup, () => initialState);
  },
});

export const {
  reducer: boardsReducer,
  actions: {
    addBoard,
    editBoard,
    deleteBoard,
    toggleExpandBoard,
    collapseAllBoards,
    updateItemsPosition,
  },
} = boardsSlice;
