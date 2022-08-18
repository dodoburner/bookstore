import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <p className="logo">Bookstore CMS</p>
    <ul className="header-nav">
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/Categories">CATEGORIES</Link></li>
    </ul>
    <div className="oval">
      <i className="fa-solid fa-user" />
    </div>
  </header>
);

export default Header;
