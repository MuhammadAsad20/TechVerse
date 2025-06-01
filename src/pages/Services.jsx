import React from 'react';
import ServiceCardSection from '../sections/ServiceCardSection';
import Heading1 from '../components/Heading1';

export default function Services() {
  return (
    <section className=" py-16 px-4 md:px-20">
      <div className='max-w-450 mx-auto'>
      <div className="text-center mb-12">
        <Heading1 text="Our Services"/>
        <p className="text-gray-400 text-xl font-semibold">Business grow karne ke liye expert tech solutions.</p>
      </div>
      <ServiceCardSection />
      </div>
    </section>
  );
}
