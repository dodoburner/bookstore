import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";
import "./Books.css";

const Book = ({ author, title, id, category }) => {
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div className="book-info">
        <span className="book-category">{category}</span>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <ul className="book-buttons">
          <li>
            <button className="book-button btn1" type="button">
              Comments
            </button>
          </li>
          <li>
            <button
              className="book-button btn2"
              onClick={() => {
                dispatch(removeBook(id));
              }}
              type="button"
            >
              Remove
            </button>
          </li>
          <li>
            <button className="book-button btn3" type="button">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="book-progress">
        <div className="oval-2" />
        <p className="progress-text">
          64%
          <br />
          <span>completed</span>
        </p>
      </div>
      <div className="chapter-container">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter-name">Chapter 17</p>
        <button className="update-progress-btn" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
