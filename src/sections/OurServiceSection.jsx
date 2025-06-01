import React from 'react';
import cube from '../assets/images/cube.png';
import monitor from '../assets/images/monitor.png';
import statistics from '../assets/images/statistics.png';
import Heading2 from '../components/Heading2';
import ServiceCard from '../components/ServiceCard'; // import the new component

const features = [
  {
    title: 'Web Development',
    description: 'We build modern responsive websites tailored to your neds.',
    icon: monitor
  },
  {
    title: '3D Design',
    description: 'Creating immersive 3D experiences and visuals.',
    icon: cube
  },
  {
    title: 'Digital Solutions',
    description: 'Empowering businesses with innovative digital strategies.',
    icon: statistics
  },
];

const OurServiceSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 max-w-350 mx-auto">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <Heading2 text="Our Service" />
          
        </div>

        <div className="flex flex-wrap -m-4">
          {features.map((feature, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
  <ServiceCard
    title={feature.title}
    description={feature.description}
    icon={feature.icon}
  />
</div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServiceSection;
