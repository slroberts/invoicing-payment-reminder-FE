import React from 'react';

const InvoiceClientInfo = ({ client }) => {
  return (
    <div className='flex-none w:1/5 pr-24 md:text-left mb-10'>
      <h2 className='font-semibold text-sm uppercase text-gray-800 mb-2'>
        Client Information
      </h2>

      <h4 className='font-bold text-xs uppercase mt-2 text-gray-400'>Name</h4>
      <p>{client.name}</p>
      <h4 className='font-bold text-xs uppercase mt-2 text-gray-400'>Email</h4>
      <p>{client.email}</p>
      <h4 className='font-bold text-xs uppercase mt-2 text-gray-400'>Phone</h4>
      <p>{client.phone}</p>
      <h4 className='font-bold text-xs uppercase mt-2 text-gray-400'>
        Invoice Date
      </h4>
      <p className='font-medium'>{new Date().toLocaleDateString()}</p>
    </div>
  );
};
export default InvoiceClientInfo;
