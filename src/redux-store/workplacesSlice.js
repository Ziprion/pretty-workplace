import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */
import { initialization } from './userSlice';

const workplacesSlice = createSlice({
  name: 'workplaces',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initialization, (state, { payload: { workplacesData } }) => ([...state, ...workplacesData]));
  },
});

export const { reducer: workplacesReducer } = workplacesSlice;
