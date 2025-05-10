// src/components/Navbar.js
import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <a href='/' className="navbar__logo">இ - Store</a>
      <input type="text" placeholder="Search..." className="navbar__search" />
      <div className="navbar__actions">
        <button className="navbar__btn">Cart</button>
        <button className="navbar__btn">Profile</button>
      </div>
    </nav>
  );
}

export default Navbar;
