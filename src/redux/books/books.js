import axios from "axios";

const ADD = "bookstore/books/ADD";
const REMOVE = "bookstore/books/REMOVE";
const FETCH_BOOKS = "bookstore/books/FETCH_BOOKS";
const initialState = [];

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.books;
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export function addBook(book) {
  return {
    type: ADD,
    book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE,
    id,
  };
}

export async function fetchBooks(dispatch, getState) {
  const res = await axios.get("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pArPMkW4SXIuhfhkSqdg/books");
  dispatch({ type: FETCH_BOOKS, books: res.data });
  console.log(getState());
}
