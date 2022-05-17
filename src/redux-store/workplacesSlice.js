import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0, import/no-cycle: 0 */

import { cleanup } from './userSlice';

const initialState = [];

const workplacesSlice = createSlice({
  name: 'workplaces',
  initialState,
  reducers: {
    setWorkplaces: (_, { payload: { workplaces } }) => workplaces,
    addWorkplace: (state, { payload: { workplace: { id, title } } }) => [
      ...state,
      {
        id,
        title,
      },
    ],
    editWorkplace: (state, { payload: { id, title } }) => {
      const editedWorkplace = state.find((workplace) => workplace.id === id);
      editedWorkplace.title = title;
    },
    deleteWorkplace: (state, { payload }) => state.filter(({ id }) => id !== payload),
  },
  extraReducers: (builder) => {
    builder.addCase(cleanup, () => initialState);
  },
});

export const {
  reducer: workplacesReducer,
  actions: {
    setWorkplaces, addWorkplace, editWorkplace, deleteWorkplace,
  },
} = workplacesSlice;
