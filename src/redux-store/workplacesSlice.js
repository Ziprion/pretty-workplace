import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */
import { initialization, cleanup } from './userSlice';

const workplacesSlice = createSlice({
  name: 'workplaces',
  initialState: { myWorkplaces: null, activeWorkplaceId: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initialization, (state, { payload: { workplacesData } }) => {
      state.myWorkplaces = workplacesData;
      state.activeWorkplaceId = workplacesData[0]?.id;
    });
    builder.addCase(cleanup, (state) => {
      state.myWorkplaces = null;
      state.activeWorkplaceId = null;
    });
  },
});

export const { reducer: workplacesReducer } = workplacesSlice;
