import React from "react";
import { useSelector } from "react-redux/es/exports";
import Book from "./Book";
import Form from "./Form";

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <main>
        {books.map((book) => (
          <Book
            key={book[0]}
            id={book[0]}
            author={book[1][0].author}
            title={book[1][0].title}
          />
        ))}
      </main>
      <Form />
    </div>
  );
};

export default Books;
