import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */

import { cleanup, initialization } from './userSlice';

const activeWorkplaceIdSlice = createSlice({
  name: 'activeWorkplaceId',
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initialization, (_, { payload: { workplacesData: { workplaces } } }) => workplaces[0]?.id);
    builder.addCase(cleanup, () => null);
  },
});

export const { reducer: activeWorkplaceIdReducer } = activeWorkplaceIdSlice;
