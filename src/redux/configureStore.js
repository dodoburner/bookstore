import { configureStore, combineReducers } from '@reduxjs/toolkit';
import crudReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  crud: crudReducer,
  categories: categoriesReducer,
});

const store = configureStore(rootReducer);
