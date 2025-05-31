import React from 'react';

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
      <div className="rounded-lg h-50 md:h-80 overflow-hidden">
        <img
          alt={title}
          className="object-cover object-center h-full w-full"
          src={image}
        />
      </div>
      <h2 className="text-2xl font-bold title-font text-gray-900 mt-5">
        {title}
      </h2>
      <p className="text-base leading-relaxed mt-2">{description}</p>
    </div>
  );
};

export default ProjectCard;
