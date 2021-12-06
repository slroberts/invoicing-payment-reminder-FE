import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <div className='flex justify-between'>
      <Link to='/'>
        <h1 className='font-sans font-bold uppercase antialiased text-blue-500 py-8'>
          Invoicing & payment Reminder
        </h1>
      </Link>
      <div className='mt-8'>
        <Button buttonText='Log Out' />
      </div>
    </div>
  );
};

export default Header;
