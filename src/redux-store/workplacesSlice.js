import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */

import { cleanup, initialization } from './userSlice';

const workplacesSlice = createSlice({
  name: 'workplaces',
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initialization, (_, { payload: { workplacesData: { workplaces } } }) => workplaces);
    builder.addCase(cleanup, () => null);
  },
});

export const { reducer: workplacesReducer } = workplacesSlice;
