const ADD = "bookstore/books/ADD";
const REMOVE = "bookstore/books/REMOVE";
const initialState = [];

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
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
