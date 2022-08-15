import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";

const Book = ({ author, title, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <button
        onClick={() => {
          dispatch(removeBook(id));
        }}
        type="button"
      >
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
