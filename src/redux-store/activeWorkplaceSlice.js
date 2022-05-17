import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0, import/no-cycle: 0 */

import { addBoard } from './boardsSlice';
import { cleanup } from './userSlice';
import { editWorkplace } from './workplacesSlice';

const initialState = {};

const activeWorkplaceSlice = createSlice({
  name: 'activeWorkplace',
  initialState,
  reducers: {
    setActiveWorkplace: (_, { payload: { workplace } }) => workplace,
  },
  extraReducers: (builder) => {
    builder.addCase(cleanup, () => initialState);
    builder.addCase(editWorkplace, (state, { payload: { title } }) => {
      state.title = title;
    });
    builder.addCase(addBoard, (state, { payload: { id } }) => {
      state.boardsPosition.push(id);
    });
  },
});

export const {
  reducer: activeWorkplaceReducer,
  actions: { setActiveWorkplace },
} = activeWorkplaceSlice;
