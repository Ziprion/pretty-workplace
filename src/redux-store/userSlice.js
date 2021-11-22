import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    userInfo: null,
  },
  reducers: {
    initialization: (state, { payload: { userData: { userId, userInfo } } }) => {
      state.userId = userId;
      state.userInfo = userInfo;
    },
  },
});

export const { reducer: userReducer, actions: { initialization } } = userSlice;
