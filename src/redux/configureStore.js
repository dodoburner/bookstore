import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import crudReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: crudReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
