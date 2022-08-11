import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Book from './Book';
import Form from './Form';

const BooksPage = () => {
  const books = [
    {
      author: 'Suzanne Collins',
      title: 'The Hunger Games',
      id: uuidv4(),
    },
    {
      author: 'Me',
      title: 'Best Book Ever',
      id: uuidv4(),
    },
  ];

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

export default BooksPage;
