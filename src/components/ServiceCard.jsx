import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="w-full sm:w-[300px] md:w-[320px] lg:w-[340px] p-6 rounded-lg flex flex-col items-center text-center mx-auto">
      <div className="w-16 h-16 inline-flex items-center justify-center rounded-full mb-4">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      </div>
      <h2 className="text-xl text-black font-semibold mb-2">{title}</h2>
      <p className="text-base text-gray-500">{description}</p>
    </div>
  );
};

export default ServiceCard;
