import React from 'react';

const Input = ({
  label,
  htmlfor,
  type,
  name,
  id,
  autoComplete,
  value,
  onChange,
}) => {
  return (
    <div className='col-span-full mb-4'>
      <label
        htmlFor={htmlfor}
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-3 sm:text-sm border-2 border-gray-100 rounded-md'
      />
    </div>
  );
};

export default Input;
