import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0, import/no-cycle: 0 */

import { setActiveWorkplace } from './activeWorkplaceSlice';
import { cleanup } from './userSlice';

const initialState = [];

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, { payload }) => ([ ...state, payload ]),
    editItem: (state, { payload: { id, title, url } }) => {
      const editedItem = state.find((item) => item.id === id);
      editedItem.title = title;
      editedItem.url = url;
    },
    deleteItem: (state, { payload: { itemId } }) => (state.filter(({ id }) => id !== itemId)),
  },
  extraReducers: (builder) => {
    builder.addCase(setActiveWorkplace, (_, { payload: { items } }) => items);
    builder.addCase(cleanup, () => initialState);
  },
});

export const {
  reducer: itemsReducer,
  actions: {
    addItem,
    editItem,
    deleteItem,
  },
} = itemsSlice;
