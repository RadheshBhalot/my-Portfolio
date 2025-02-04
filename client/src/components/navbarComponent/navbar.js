import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { GiCrossMark } from "react-icons/gi";
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Project", path: "/project" },
    { id: 4, text: "Experience", path: "/experience" },
    { id: 6, text: "Services", path: "/service" },
    { id: 5, text: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <div className="navbar-container fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 flex justify-between items-center">

          {/* Brand Section */}
          <div className="brand flex items-center space-x-2">
            <h1 className='font-semibold text-xl cursor-pointer'>
              <span className='text-green-500 text-3xl'>R</span>adhe
              <p className='text-sm text-gray-500'>Web Developer</p>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text, path }) => (
              <li 
                key={id} 
                className={`nav-item list-none cursor-pointer transition duration-300 ${location.pathname === path ? 'text-green-500 font-bold' : 'hover:text-green-500'}`}
              >
                <Link to={path}>{text}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div onClick={() => setMenu(!menu)} className="md:hidden z-50 cursor-pointer">
            {menu ? <GiCrossMark size={24} /> : <FiMenu size={24} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="mobile-menu bg-white flex flex-col items-center space-y-6 h-screen justify-center">
            <ul className="text-xl font-semibold">
              {navItems.map(({ id, text, path }) => (
                <li 
                  key={id} 
                  className={`cursor-pointer transition duration-300 ${location.pathname === path ? 'text-green-500 font-bold' : 'hover:text-green-500'}`}
                >
                  <Link to={path} onClick={() => setMenu(false)}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
