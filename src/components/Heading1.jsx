import React from 'react';

function Heading1({ text, className = '' }) {
  return (
    <h1 className={`title-font sm:text-6xl text-3xl mb-10 font-medium text-gray-900 ${className}`}>
      {text}
    </h1>
  );
}

export default Heading1;
