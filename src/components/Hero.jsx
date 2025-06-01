// src/components/Hero.jsx
import React from 'react';
import Button from './Button';
import Heading1 from './Heading1';
import { motion } from 'framer-motion';

const Hero = ({ title, description, imageUrl }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto max-w-screen-xl px-5 py-24 flex flex-col-reverse md:flex-row items-center">
        
        {/* Left Text Section */}
        <motion.div
          className="md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Heading1 text={title} />
          <p className="text-gray-500 mb-8 leading-relaxed text-xl font-semibold">
            {description}
          </p>
          <motion.div
            className="flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button text="Learn More" onClick={() => console.log('Clicked')} />
          </motion.div>
        </motion.div>

        {/* Right Image Section with glow and float */}
        <motion.div
          className="md:w-1/2 w-5/6 relative flex justify-center items-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing background behind image */}
          <motion.div
            className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-cyan-300 blur-3xl opacity-30 z-0"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Floating image on top */}
          <motion.img
            className="relative z-10 object-cover object-center rounded"
            loading="lazy"
            alt="hero"
            src={imageUrl}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
