// src/components/HeroSection.jsx
import React from 'react';
import Button from './Button';
import Heading1 from './Heading1';

const Hero = ({
  title,
  description,
  primaryBtn,
  secondaryBtn,
  imageUrl,
}) => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-280">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Heading1 text= {title}/>
          <p className="text-gray-500 mb-8 leading-relaxed text-xl font-semibold">
            {description}
          </p>
          <div className="flex justify-center">
            <Button text="Learn More" onClick={() => console.log('Clicked')} />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={imageUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
