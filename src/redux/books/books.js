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
      return state.filter((book) => book[0] !== action.id);
    default:
      return state;
  }
}

export function addBook(book) {
  return function addBookThunk(dispatch) {
    axios.post("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Q1QN0NorrFflxgwf6FZY/books", {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'NAN',
    });
    dispatch({
      type: ADD,
      book: [
        book.id,
        [{
          author: book.author,
          title: book.title,
          category: 'NAN',
        }],
      ],
    });
  };
}

export function removeBook(id) {
  return function remoeBookThunk(dispatch) {
    axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Q1QN0NorrFflxgwf6FZY/books/${id}`);
    dispatch({
      type: REMOVE,
      id,
    });
  };
}

export async function fetchBooks(dispatch) {
  const res = await axios.get("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Q1QN0NorrFflxgwf6FZY/books");
  dispatch({ type: FETCH_BOOKS, books: Object.entries(res.data) });
}
