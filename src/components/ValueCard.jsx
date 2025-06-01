import React from 'react';

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="border border-cyan-500 p-6 rounded-2xl shadow hover:scale-105 transition-transform">
      <h4 className="text-xl text-gray-700 font-semibold mb-2">{icon} {title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ValueCard;
