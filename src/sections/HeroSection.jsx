import React from 'react';
import Hero from '../components/Hero';
import laptop from '../assets/images/laptop.png';

function HeroSection() {
  return (
    <div className='max-w-450 mx-auto'>
      <Hero
        title="Innovating the Future with Techonolgy"
        description="We're dedicated to leveraging cutting-edge technology to solve real-world problems and drive progress"
        imageUrl={laptop}
      />

    </div>
  );
}

export default HeroSection;
