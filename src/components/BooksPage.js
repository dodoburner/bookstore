import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Book from '../Book';

const BooksPage = () => {
  const books = [
    {
      author: 'Suzanne Collins',
      title: 'The Hunger Games',
      id: uuidv4(),
    },
  ];

  return (
    <div>
      <Header />
      <main>
        {books.map((book) => (
          <Book key={book.id} author={book.author} title={book.title} />
        ))}
      </main>
    </div>
  );
};

export default BooksPage;
