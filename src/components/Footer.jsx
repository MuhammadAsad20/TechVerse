import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-100 body-font"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto py-6 px-5 flex justify-center items-center">
        <p className="text-gray-600 text-sm text-center font-medium">
          © {new Date().getFullYear()} <span className="text-cyan-600 font-bold">TechVerse</span> — All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
