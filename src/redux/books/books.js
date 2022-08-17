import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const ADD = "bookstore/books/ADD";
const REMOVE = "bookstore/books/REMOVE";
const FETCH_BOOKS = "bookstore/books/FETCH_BOOKS";
const initialState = [];

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case 'bookstore/books/FETCH_BOOKS/fulfilled':
      return action.payload.books;
    case 'bookstore/books/ADD/fulfilled':
      return [...state, action.payload.book];
    case 'bookstore/books/REMOVE/fulfilled':
      return state.filter((book) => book[0] !== action.payload.id);
    default:
      return state;
  }
}

export const addBook = createAsyncThunk(
  ADD,
  async (book) => {
    await axios.post("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Q1QN0NorrFflxgwf6FZY/books", {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'NAN',
    });
    return {
      book: [
        book.id,
        [{
          author: book.author,
          title: book.title,
          category: 'NAN',
        }],
      ],
    };
  },
);

export const removeBook = createAsyncThunk(
  REMOVE,
  async (id) => {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Q1QN0NorrFflxgwf6FZY/books/${id}`);
    return { id };
  },
);

export const fetchBooks = createAsyncThunk(
  FETCH_BOOKS,
  async () => {
    const res = await axios.get("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Q1QN0NorrFflxgwf6FZY/books");
    return { books: Object.entries(res.data) };
  },
);
