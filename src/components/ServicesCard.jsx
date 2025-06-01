import React from 'react';
import { motion } from 'framer-motion';

const ServicesCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="border border-cyan-500 rounded-2xl p-6 shadow-xl/20 shadow-cyan-900/100 hover:scale-105 transition-transform"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default ServicesCard;
