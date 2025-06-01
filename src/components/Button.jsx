import React from 'react';

function Button({ text, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex text-white bg-cyan-600 border-0 py-3 px-10 focus:outline-none hover:bg-cyan-700 rounded-lg text-xl font-semibold transition-transform hover:scale-105 hover:shadow-xl duration-300`}
    >
      {text}
    </button>
  );
}

export default Button;
