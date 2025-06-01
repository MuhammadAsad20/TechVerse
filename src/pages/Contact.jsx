import React from 'react';
import ContactInfoSection from '../sections/ContactInfoSection';
import ContactFormSection from '../sections/ContactFormSection';
import Heading1 from '../components/Heading1';

export default function Contact() {
  return (
    <section className=" py-16 px-4 md:px-20">
      <div className='max-w-400 mx-auto'>
      <div className="text-center mb-12">
       <Heading1 text="Contact Us" />
        <p className="text-gray-400">Apne ideas humein bhejein – milke kuch naya banate hain!</p>
      </div>
<div className="grid md:grid-cols-2 gap-10">
  <ContactFormSection />
  <ContactInfoSection />
</div>
</div>
    </section>
  );
}
