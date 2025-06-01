import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <motion.div
      className="w-full sm:w-[300px] md:w-[320px] lg:w-[340px] p-6 rounded-lg flex flex-col items-center text-center mx-auto shadow-md bg-white hover:shadow-xl transition duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-16 h-16 inline-flex items-center justify-center rounded-full mb-4"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 1, repeat: 1, ease: 'easeInOut' }}
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      </motion.div>
      <h2 className="text-xl text-black font-semibold mb-2">{title}</h2>
      <p className="text-base text-gray-500">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
