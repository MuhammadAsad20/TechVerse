import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 body-font">
      
        <div className="container mx-auto py-4 px-5 flex justify-center items-center">
          <p className="text-gray-700 text-md text-center">
            © {new Date().getFullYear()} TechVerse — All rights reserved
          </p>
        </div>
      
    </footer>
  );
};

export default Footer;
