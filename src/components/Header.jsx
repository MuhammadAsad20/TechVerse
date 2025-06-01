// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/About', label: 'About' },
  { path: '/Services', label: 'Services' },
  { path: '/Contact', label: 'Contact' },
];

const Header = () => {
  const location = useLocation();

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white backdrop-blur bg-opacity-80 text-gray-600 body-font shadow-md"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="text-cyan-600 font-bold text-5xl">TechVerse</span>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-8">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`relative font-semibold text-lg transition-colors ${
                location.pathname === path ? 'text-cyan-600' : 'hover:text-cyan-600'
              }`}
            >
              {label}
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] bg-cyan-600 w-full origin-left scale-x-0"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
