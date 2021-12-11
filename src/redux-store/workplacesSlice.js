import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */
import { initialization } from './userSlice';

const workplacesSlice = createSlice({
  name: 'workplaces',
  initialState: { myWorkplaces: [], activeWorkplaceId: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initialization, (state, { payload: { workplacesData } }) => {
      state.myWorkplaces = workplacesData;
      state.activeWorkplaceId = workplacesData[0]?.id;
    });
  },
});

export const { reducer: workplacesReducer } = workplacesSlice;
