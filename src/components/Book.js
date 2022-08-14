import React from "react";
import PropTypes from "prop-types";
import { removeBook } from "../redux/books/books";
import store from "../redux/configureStore";

const Book = ({ author, title, id }) => {

  const handleRemove = (id) => {
    store.dispatch(removeBook(id));
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <button onClick={() => {
        handleRemove(id)
      }} type="button">
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
