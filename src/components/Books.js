import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <main>
        {books.map((book) => (
          <Book key={book.id} author={book.author} title={book.title} />
        ))}
      </main>
      <Form />
    </div>
  );
};

export default Books;
