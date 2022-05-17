import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0, import/no-cycle: 0 */

import { setActiveWorkplace } from './activeWorkplaceSlice';
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
  },
  extraReducers: (builder) => {
    builder.addCase(setActiveWorkplace, (_, { payload: { boards } }) => boards);
    builder.addCase(cleanup, () => initialState);
  },
});

export const { reducer: boardsReducer, actions: { addBoard, editBoard, deleteBoard } } = boardsSlice;
