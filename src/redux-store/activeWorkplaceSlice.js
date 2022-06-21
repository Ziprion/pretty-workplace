import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0, import/no-cycle: 0 */

import { addBoard, deleteBoard } from './boardsSlice';
import { cleanup } from './userSlice';
import { editWorkplace } from './workplacesSlice';

const initialState = {};

const activeWorkplaceSlice = createSlice({
  name: 'activeWorkplace',
  initialState,
  reducers: {
    setActiveWorkplace: (_, { payload: { workplace } }) => workplace,
    updateBoardsPosition: (state, { payload }) => {
      state.boardsPosition = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cleanup, () => initialState);
    builder.addCase(editWorkplace, (state, { payload: { title } }) => {
      state.title = title;
    });
    builder.addCase(addBoard, (state, { payload: { id } }) => {
      state.boardsPosition.push(id);
    });
    builder.addCase(deleteBoard, (state, { payload }) => {
      state.boardsPosition = state.boardsPosition.map((id) => (id === payload ? 0 : id));
    });
  },
});

export const {
  reducer: activeWorkplaceReducer,
  actions: {
    setActiveWorkplace,
    updateBoardsPosition,
  },
} = activeWorkplaceSlice;
