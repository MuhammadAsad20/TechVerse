import React from 'react';
import Heading2 from '../components/Heading2';

const techStack = [
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-20 h-20 mb-2">
        <path
          fill="#00acc1"
          d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599
          c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24
          c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6
          c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604z 
          M12,24c-6.4,0-10.4,3.199-12,9.598c2.4-3.199,5.2-4.399,8.4-3.599
          c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152
          c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599
          c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24z"
        />
      </svg>
    ),
  },
  {
    name: 'Framer Motion',
    icon: 'https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png',
  },
];

const TechnologiesSection = () => {
  return (
    <section className="py-16 text-center">
      <Heading2 text="Our Technologies" className='mb-10'/>
      <div className="flex flex-wrap justify-center gap-20 px-4">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-110"
          >
            {typeof tech.icon === 'string' ? (
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-20 h-20 object-contain mb-2"
              />
            ) : (
              tech.icon
            )}
            <p className="mt-1 text-sm font-medium text-gray-700">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
