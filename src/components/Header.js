import React from 'react';
import './Header.css'; // Create a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <img src="path/to/logo.png" alt="HomeAwake Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
