import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    initialization: (state, { payload: { userData: { userInfo } } }) => ({ ...state, ...userInfo }),
  },
});

export const { reducer: userReducer, actions: { initialization } } = userSlice;
