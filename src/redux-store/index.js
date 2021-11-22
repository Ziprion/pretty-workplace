import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { userReducer } from './userSlice';
import { workplacesReducer } from './workplacesSlice';

export * from './userSlice';
export * from './workplacesSlice';

const reducer = combineReducers({
  user: userReducer,
  workplaces: workplacesReducer,
});

export default configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
});
