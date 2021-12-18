import React from 'react';
import { capitalizeWords } from '../../helpers/helperMethods';

const InvoiceClientInfo = ({ client }) => {
  return (
    <div className='w:1/5 pr-16 md:text-left mb-10'>
      <h2 className='font-semibold text-sm uppercase text-gray-800 mb-2'>
        Client Information
      </h2>
      <div>
        <h4 className='font-bold text-xs uppercase mt-4 text-gray-400'>Name</h4>
        <p>{capitalizeWords(client.name)}</p>
      </div>
      <div>
        <h4 className='font-bold text-xs uppercase mt-4 text-gray-400'>
          Email
        </h4>
        <p>{client.email}</p>
      </div>
      <div>
        <h4 className='font-bold text-xs uppercase mt-4 text-gray-400'>
          Phone
        </h4>
        <p>{client.phone}</p>
      </div>
      <div>
        <h4 className='font-bold text-xs uppercase mt-4 text-gray-400'>
          Invoice Date
        </h4>
        <p>{client.date}</p>
      </div>
    </div>
  );
};
export default InvoiceClientInfo;
