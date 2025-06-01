import React from 'react';

function Button({ text, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex text-white bg-cyan-600 border-0 py-3 px-10 focus:outline-none hover:bg-cyan-700 rounded-lg text-xl font-semibold`}
    >
      {text}
    </button>
  );
}

export default Button;
