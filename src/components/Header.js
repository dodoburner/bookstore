import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <p className="logo">Bookstore CMS</p>
    <ul>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/Categories">CATEGORIES</Link></li>
    </ul>
    <button type="button">logo</button>
  </header>
);

export default Header;
