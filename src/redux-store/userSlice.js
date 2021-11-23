import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
  },
  reducers: {
    initialization: (state, { payload: { userData: { userInfo } } }) => {
      state.userInfo = userInfo;
    },
  },
});

export const { reducer: userReducer, actions: { initialization } } = userSlice;
