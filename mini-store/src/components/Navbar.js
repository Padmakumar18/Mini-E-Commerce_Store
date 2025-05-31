
import React from 'react';
import './Navbar.scss';
import { FaShoppingCart, FaUserCircle   } from 'react-icons/fa';
import { TbLogout } from "react-icons/tb";


function Navbar() {
  return (
    <nav className="navbar">
      <a href='/' className="navbar__logo">QuickBuy</a>
      <input type="text" placeholder="Search here..." className="navbar__search" />
      <div className="navbar__actions">
        <button className="navbar__btn">
          <FaShoppingCart size={20} /> Cart
        </button>
        <button className="navbar__btn">
          <FaUserCircle size={20} /> Profile
        </button>
        <button className="navbar__btn">
          <TbLogout size={20} /> Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;