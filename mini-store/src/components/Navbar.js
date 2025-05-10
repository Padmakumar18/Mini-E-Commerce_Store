// Navbar.js
import React from 'react';
import './Navbar.scss';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <a href='/' className="navbar__logo">QuickBuy</a>
      <input type="text" placeholder="Search..." className="navbar__search" />
      <div className="navbar__actions">
        <button className="navbar__btn">
          <FaShoppingCart size={15} /> Cart
        </button>
        <button className="navbar__btn">
          <FaUserCircle size={15} /> Profile
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
