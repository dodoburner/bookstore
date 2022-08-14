import React from "react";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../redux/books/books";
import store from "../redux/configureStore";

const Form = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    const title = document.getElementsByName("title")[0].value;
    const author = document.getElementsByName("author")[0].value;

    if (title.trim() && author.trim()) {
      const book = {
        title,
        author,
        id: uuidv4(),
      };

      store.dispatch(addBook(book));
      document.getElementsByName("title")[0].value = '';
      document.getElementsByName("author")[0].value = '';
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>ADD NEW BOOK</h3>
      <div>
        <input name="title" type="text" placeholder="Book title" />
        <input name="author" type="text" placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default Form;
