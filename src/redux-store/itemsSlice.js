import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */

import { cleanup, initialization } from './userSlice';

const itemsSlice = createSlice({
  name: 'items',
  initialState: null,
  reducers: {
    addItem: (state, { payload }) => ([ ...state, payload ]),
    deleteItem: (state, { payload: { id: itemId } }) => (state.filter(({ id }) => id !== itemId)),
  },
  extraReducers: (builder) => {
    builder.addCase(initialization, (_, { payload: { workplacesData: { items } } }) => items);
    builder.addCase(cleanup, () => null);
  },
});

export const { reducer: itemsReducer, actions: { addItem, deleteItem } } = itemsSlice;
