import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */
import { initialization } from './userSlice';

const workplacesSlice = createSlice({
  name: 'workplaces',
  initialState: {
    lastUsedWorkplaceId: null,
    myWorkplaces: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initialization, (state, { payload: { workplacesData: { lastUsedWorkplaceId, workplaces } } }) => {
      state.lastUsedWorkplaceId = lastUsedWorkplaceId;
      state.myWorkplaces = workplaces;
    });
  },
});

export const { reducer: workplacesReducer } = workplacesSlice;
