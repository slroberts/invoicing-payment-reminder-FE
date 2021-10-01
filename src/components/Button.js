import React from 'react';

const Button = ({ buttonText, onSignInClick, custom }) => {
  return (
    <button
      onClick={() => onSignInClick()}
      className={`mt-3 p-3 w-48 text-white text-center rounded-full border-none transition duration-300 ease-in-out ${custom}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
