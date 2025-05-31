import React from 'react';

function Button({ text, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex text-white bg-cyan-600 border-0 py-2.5 px-6 focus:outline-none hover:bg-cyan-700 rounded-lg text-xl ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
