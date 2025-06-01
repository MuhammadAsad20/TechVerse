import React from 'react';

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="border border-cyan-500 rounded-2xl p-6 shadow-xl/20 shadow-cyan-900/100 hover:scale-105 transition-transform">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServicesCard;
