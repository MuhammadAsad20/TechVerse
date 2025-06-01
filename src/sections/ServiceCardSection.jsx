import React from 'react';   
import ServicesCard from '../components/ServicesCard';

const services = [
  {
    title: 'Web Development',
    description: 'Modern aur responsive websites jo har device par smooth chalti hain.',
    icon: '🌐',
  },
  {
    title: 'App Development',
    description: 'Powerful mobile apps Android aur iOS ke liye.',
    icon: '📱',
  },
  {
    title: 'AI Integration',
    description: 'AI-based tools aur automation solutions.',
    icon: '🤖',
  },
  {
    title: 'UI/UX Design',
    description: 'Attractive aur user-friendly interface design.',
    icon: '🎨',
  },
  {
    title: 'Cloud Solutions',
    description: 'Secure aur scalable cloud infrastructure.',
    icon: '☁️',
  },
  {
    title: 'SEO Optimization',
    description: 'Google me top par lane ke liye SEO techniques.',
    icon: '🚀',
  },
];

const ServiceCardSection = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServicesCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServiceCardSection;
