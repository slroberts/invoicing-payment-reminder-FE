import React from 'react';

const InvoiceClientInfo = ({ client }) => {
  return (
    <div className='flex-none w:1/5 pr-24 md:text-left mb-10'>
      <h2 className='font-semibold text-xs uppercase text-gray-400 mb-2'>
        Client Information
      </h2>
      <p>{client.name}</p>
      <p>{client.email}</p>
      <p>{client.phone}</p>
    </div>
  );
};
export default InvoiceClientInfo;
