const STATUS = "bookstore/categories/STATUS";

export default function reducer(state = [], action) {
  if (action.type === STATUS) {
    return (state = action.text);
  } else {
    return state;
  }
}

export function checkStatus() {
  return {
    type: STATUS,
    text: "Under construction",
  };
}
