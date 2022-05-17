import { combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';

import { activeWorkplaceReducer } from './activeWorkplaceSlice';
import { boardsReducer } from './boardsSlice';
import { itemsReducer } from './itemsSlice';
import { userReducer } from './userSlice';
import { workplacesReducer } from './workplacesSlice';

export * from './activeWorkplaceSlice';
export * from './boardsSlice';
export * from './itemsSlice';
export * from './userSlice';
export * from './workplacesSlice';

const reducer = combineReducers({
  user: userReducer,
  workplaces: workplacesReducer,
  activeWorkplace: activeWorkplaceReducer,
  boards: boardsReducer,
  items: itemsReducer,
});

export default configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
});
