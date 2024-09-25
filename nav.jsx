import React from 'react';
import './nav.css';

function Nav() {
  return (
    <div>
      <header className="header">
        <div className="header1">
          <a href="#" className="logo">Logo</a>
          <form action="" className="search">
            <input type="search" name="search" placeholder="Search here..." id="searchBar" />
          </form>
          <div className="icons">
            <a href="#" className="icon-heart">Heart</a>
            <a href="#" className="icon-cart">Cart</a>
            <a href="#" className="icon-user">User</a>
          </div>
        </div>
        <div className="header-2">
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#featured">Featured</a>
            <a href="#arrivals">Arrivals</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Nav;
