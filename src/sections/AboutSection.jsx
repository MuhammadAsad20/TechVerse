import React from 'react';
import Hero from '../components/Hero';
import butterfly from '../assets/images/butterfly.png';

function AboutSection() {
  return (
    <div className='max-w-450 mx-auto'>
      <Hero
        title="About Us"
        description="At TechVerse, we harness the power of innovation to create meaningful solutions that transform lives, empower communities, and shape a smarter, more connected world."
        imageUrl={butterfly}
      />

    </div>
  );
}

export default AboutSection;
