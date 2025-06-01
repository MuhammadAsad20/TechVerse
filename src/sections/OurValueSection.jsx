import React from 'react';
import ValueCard from '../components/ValueCard';
import Heading2 from '../components/Heading2';

const values = [
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'Naye ideas aur solutions ke liye hamesha taiyaar.',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Clients ke saath milke best results banana.',
  },
  {
    icon: '🎯',
    title: 'Quality',
    description: 'Har product me high standards maintain karna.',
  },
];

const OurValuesSection = () => {
  return (
    <section className="mt-16 px-4 md:px-20 max-w-450 mx-auto">
     <Heading2 text="Our Values" className='text-center mb-10'/>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <ValueCard
            key={index}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OurValuesSection;
