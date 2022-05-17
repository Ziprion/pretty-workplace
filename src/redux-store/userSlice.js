import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0, import/no-cycle: 0 */

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, { payload }) => payload,
    cleanup: () => initialState,
  },
});

export const { reducer: userReducer, actions: { setUser, cleanup } } = userSlice;
