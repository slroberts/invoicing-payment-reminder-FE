import React from 'react';
import InvoiceImage from '../images/undraw_Receipt_re_fre3.svg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <div className='flex flex-wrap'>
        <div className='flex-auto md:w-24 pt-8 pr-8'>
          <h1 className='text-4xl lg:text-6xl'>
            Invoicing & Payment Reminder App
          </h1>
          <p className='mt-6 lg:text-2xl  text-gray-500 antialiased'>
            Generate, send, and receive invoices, as well as send automated
            follow-up reminders about overdue payments.
          </p>

          <Link to='/login'>
            <Button
              buttonText='Get Started'
              custom='bg-blue-500 hover:bg-blue-700 mt-6'
              to='/Login'
            />
          </Link>
        </div>
        <img
          className='flex-auto md:w-24'
          src={InvoiceImage}
          alt='invoicing illustration - man in a black shirt with gray pants and black shoes looking at a large invoice.'
        />
      </div>
    </div>
  );
};

export default Landing;
