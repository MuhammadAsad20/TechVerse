import React from 'react';
import AboutSection from '../sections/AboutSection';
import OurValuesSection from '../sections/OurValueSection';
import Heading1 from '../components/Heading1';

export default function About() {
  return (
    <section className=''>

      {/* About Content */}
      <AboutSection/>

      <OurValuesSection/>
    </section>
  );
}