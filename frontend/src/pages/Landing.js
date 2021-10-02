import React from 'react';
import GoogleAuthLogin from '../components/GoogleAuthLogin';
import InvoiceImage from '../images/undraw_Receipt_re_fre3.svg';

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
          <h2 className='font-semibold uppercase mt-6 text-gray-400 antialiased'>
            To Get Started
          </h2>
          <GoogleAuthLogin />
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
