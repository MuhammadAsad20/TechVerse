// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          
          <span className="text-cyan-600 font-bold text-5xl">TechVerse</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" className="mr-10 hover:text-gray-900 font-semibold">Home</a>
          <a href="#" className="mr-10 hover:text-gray-900 font-semibold">About</a>
          <a href="#" className="mr-10 hover:text-gray-900 font-semibold">Services</a>
          <a href="#" className="mr-10 hover:text-gray-900 font-semibold">Contact</a>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
