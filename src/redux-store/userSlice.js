import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    initialization: (state, { payload: { userData } }) => ({ ...state, ...userData }),
    cleanup: () => null,
  },
});

export const { reducer: userReducer, actions: { initialization, cleanup } } = userSlice;
