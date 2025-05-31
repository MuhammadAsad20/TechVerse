import React from 'react';

function Heading2({ text, className = '' }) {
  return (
    <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ${className}`}>
      {text}
    </h1>
  );
}

export default Heading2;
