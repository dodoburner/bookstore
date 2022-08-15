import { v4 as uuidv4 } from "uuid";

const ADD = "bookstore/books/ADD";
const REMOVE = "bookstore/books/REMOVE";
const initialState = [
  {
    title: "Harry Potter",
    author: "JK Rowling",
    id: uuidv4(),
  },
  {
    title: "Picture of Dorian Gray",
    author: "Oscar Wilde",
    id: uuidv4(),
  },
  {
    title: "Mickey Mouse",
    author: "Walt Disney",
    id: uuidv4(),
  },
];

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
