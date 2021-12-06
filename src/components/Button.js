import React from 'react';

const Button = ({ buttonText, handleOnClick, custom, disabled }) => {
  return (
    <button
      onClick={handleOnClick}
      className={`w-full inline-flex justify-center text-center rounded-full border border-gray-300 shadow-sm px-6 py-2 transition duration-300 ease-in-out bg-white text-base text-gray-700 hover:bg-gray-0 focus:outline-none focus:ring-indigo-500 mb-3 sm:mt-0 sm:w-auto sm:text-sm ${custom}`}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
