import React, { useState, useEffect } from 'react';
import logo from '../assets/image 5.svg';
import search from '../assets/search.svg';
import user from '../assets/user.svg';
import cart from '../assets/cart.svg';
import menuIcon from '../assets/menu.png';
import closeIcon from '../assets/close.png';

const Navbar = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Track screens <= 771px

  // Detect screen width for both mobile and small screen behavior
  const handleResize = () => {
    if (window.innerWidth <= 1115) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
      setIsListOpen(false); // Close the menu on larger screens
    }

    if (window.innerWidth <= 771) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    handleResize(); // Check screen size initially
    window.addEventListener('resize', handleResize); // Listen for window resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  return (
    <div className="py-8 px-8 md:px-36 flex justify-between items-center">
      <img src={logo} alt="Logo" className="w-32 h-13" />

      {/* Show navigation items on large screens only */}
      {!isMobileView && (
        <ul className="flex list-none gap-9 text-lg">
          <li>Watches</li>
          <li>Eyewear</li>
          <li>Accessories</li>
          <li>News</li>
        </ul>
      )}

      {/* Icons (Search, User, Cart, Menu) */}
      <div className="flex gap-6 justify-center items-center relative">
        <img src={search} alt="Search Icon" className="h-7 w-7" />

        {/* Log In and Cart are hidden when in small screens */}
        {!isSmallScreen && (
          <div className="flex justify-center items-center">
            <img src={user} alt="User Icon" />
            <li className="list-none">Log In</li>
          </div>
        )}

        {!isSmallScreen && (
          <div className="bg-custom rounded-full px-2 py-2 relative z-10">
            <img src={cart} alt="Cart Icon" />
          </div>
        )}

        {/* Show the menu button on screens <= 1115px */}
        {isMobileView && (
          <button
            onClick={toggleList}
            className="relative z-10" // Same div as cart, search, and user icons
          >
            <img
              src={isListOpen ? closeIcon : menuIcon}
              alt="menu_toggle"
              className="h-7 w-7"
            />
          </button>
        )}
      </div>

      {/* Slide-in menu for mobile view (width <= 1115px) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-20 p-6 transform ${
          isListOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="list-none flex flex-col gap-4">
          <li>Watches</li>
          <li>Eyewear</li>
          <li>Accessories</li>
          <li>News</li>

          {/* Add Log In and Cart to the menu for width <= 771px */}
          {isSmallScreen && (
            <>
              <li className="flex items-center gap-2">
                <img src={user} alt="User Icon" className="h-5 w-5" />
                Log In
              </li>
              <li className="flex items-center gap-2">
                <img src={cart} alt="Cart Icon" className="h-5 w-5" />
                Cart
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {isListOpen && (
        <div
          onClick={toggleList}
          className="fixed inset-0 bg-black opacity-50 z-10"
        ></div>
      )}
    </div>
  );
};

export default Navbar;

// NAV BAR IS COMPLEATED
