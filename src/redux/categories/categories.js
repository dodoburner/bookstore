const STATUS = 'bookstore/categories/STATUS';

export default function categoriesReducer(state = [], action) {
  if (action.type === STATUS) {
    return ([...state, action.text]);
  }
  return state;
}

export function checkStatus() {
  return {
    type: STATUS,
    text: 'Under construction',
  };
}
