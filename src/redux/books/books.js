const ADD = 'bookstore/crud/ADD';
const REMOVE = 'bookstore/crud/REMOVE';

export default function crudReducer(state = [], action) {
  switch(action.type) {
    case ADD: return [...state].push(action.book);
    case REMOVE: return [...state].filter(book => book.id !== action.id);
    default: return state;
  }
}

export function addBook(book) {
  return {
     type: ADD,
     book: book
     }
}

export function removeBook(id) {
  return {
     type: REMOVE,
     id: id
    }
}
