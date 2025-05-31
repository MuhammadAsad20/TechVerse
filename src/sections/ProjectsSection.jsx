import React from 'react';
import  neonlaptop from '../assets/images/neonlaptop.jpg'
import  neoncube from '../assets/images/neoncube.jpg'
import Heading2 from '../components/Heading2';
import ProjectCard from '../components/ProjectCard'; // Adjust path if needed

const features = [
  {
    title: 'Tech Product',
    description:
      'An innovative tech product designed to enhance productivity.',
    image: neonlaptop,
  },
  {
    title: 'Ai Application',
    description:
      'A ecorin-gedg AI application transforming industries.',
    image: neoncube,
  },
  
];

const ProjectsSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <Heading2 text="Projects" />
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {features.map((feature, index) => (
            <ProjectCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
