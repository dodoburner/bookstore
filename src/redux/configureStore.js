/* eslint-disable */

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import crudReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: crudReducer,
  categories: categoriesReducer,
});

const store = configureStore({reducer: rootReducer});
export default store;
