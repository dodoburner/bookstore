const ADD = 'bookstore/crud/ADD';
const REMOVE = 'bookstore/crud/REMOVE';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD: return [...state].push(action.book);
    case REMOVE: return [...state].filter(el => el.id !== id)
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