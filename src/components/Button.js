import React from 'react';

const Button = ({ buttonText, handleOnClick, custom, disabled }) => {
  return (
    <button
      onClick={handleOnClick}
      className={`mt-3 p-3 w-48 text-white text-center rounded-full border-none transition duration-300 ease-in-out bg-gray-500 hover:bg-gray-700 ${custom}`}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
