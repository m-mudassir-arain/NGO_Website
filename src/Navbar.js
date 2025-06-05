import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
// import sitelogo from './assets/Site-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav id='Navbar' className="p-4 flex justify-center items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="#" className="text-blue-700 font-bold text-xl">
        NGO-WEB
          {/* <img src={sitelogo} className='w-72' alt="Site Logo" /> */}
        </Link>

        {/* Menu Button for Mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Links - Hidden on Mobile */}
        <div id='DesktopLinks' className={`lg:flex space-x-4 ${isOpen ? 'hidden' : 'block'} lg:block`}>
          <Link to="/" className="text-white hover:text-gray-400 text-xl">Home</Link>
          <Link to="/About" className="text-white hover:text-gray-400 text-xl">About Us</Link>
          <Link to="/Program" className="text-white hover:text-gray-400 text-xl">Program</Link>
          <Link to="/Donate" className="text-white hover:text-gray-400 text-xl">Donate</Link>
          <Link to="/Events" className="text-white hover:text-gray-400 text-xl">Events</Link>
          <Link to="/Contact" className="text-white hover:text-gray-400 text-xl">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu - Covers Full Screen */}
      {isOpen && (
        <div id='MobileLinks' className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center lg:hidden z-50">
          {/* Close Button in the Top Left */}
          <button
            onClick={closeMenu}
            className="absolute top-4 left-4 text-white focus:outline-none text-2xl">X
          </button>

          {/* Menu Items Centered */}
          <Link to="/" onClick={closeMenu} className="block text-white hover:text-blue-700 py-4 text-2xl">Home</Link>
          <Link to="/About" onClick={closeMenu} className="block text-white hover:text-blue-700 py-4 text-2xl">About Us</Link>
          <Link to="/Program" onClick={closeMenu} className="block text-white hover:text-blue-700 py-4 text-2xl">Program</Link>
          <Link to="/Donate" onClick={closeMenu} className="block text-white hover:text-blue-700 py-4 text-2xl">Donate</Link>
          <Link to="/Events" onClick={closeMenu} className="block text-white hover:text-blue-700 py-4 text-2xl">Events</Link>
          <Link to="/Contact" onClick={closeMenu} className="block text-white hover:text-blue-700 py-4 text-2xl">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

