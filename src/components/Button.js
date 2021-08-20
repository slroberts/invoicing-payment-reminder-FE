import React from 'react';

const Button = ({ buttonText }) => {
  return (
    <button
      onClick={() => console.log('I am a button')}
      className='mt-3 p-3 w-48 bg-blue-500 hover:bg-blue-700 text-white text-center rounded-full border-none transition duration-300 ease-in-out'
    >
      {buttonText}
    </button>
  );
};

export default Button;
