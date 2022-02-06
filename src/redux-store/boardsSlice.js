import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */

import { cleanup, initialization } from './userSlice';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: null,
  reducers: {
    addBoardAction: (state, { payload }) => {
      state.push(payload);
    },
    deleteBoardAction: (state, { payload: { id } }) => state.filter((board) => board.id !== id),
  },
  extraReducers: (builder) => {
    builder.addCase(initialization, (_, { payload: { workplacesData: { boards } } }) => boards);
    builder.addCase(cleanup, () => null);
  },
});

export const { reducer: boardsReducer, actions: { addBoardAction, deleteBoardAction } } = boardsSlice;
