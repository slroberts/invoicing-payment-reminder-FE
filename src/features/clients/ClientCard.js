import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { deleteClient } from './clientsSlice';
import { addClient } from '../invoice/invoiceSlice';
import Button from '../../components/Button';
import { capitalizeWords } from '../../helpers/helperMethods';

const ClientCard = ({ client, index }) => {
  const invoices = useSelector((state) => state.invoice.value);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col justify-center  border border-opacity-60 text-center w-full p-6 lg:w-1/3 md:w-2/4 hover:bg-gray-200 hover:border-gray-300'>
      <button onClick={() => dispatch(deleteClient(index))}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 float-right'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>

      <h2 className='text-lg text-gray-600 mb-4'>
        {capitalizeWords(client.name)}
      </h2>
      {invoices.filter((invoice) => invoice.id === client.id).length === 0 ? (
        <Link to={`/dashboard/generate-invoice/client/${client.id}`}>
          <Button
            buttonText='Generate Invoice'
            handleOnClick={() =>
              dispatch(
                addClient({
                  id: client.id,
                  name: client.name,
                  email: client.email,
                  phone: client.phone,
                  date: new Date().toLocaleDateString(),
                  items: [],
                })
              )
            }
          />
        </Link>
      ) : (
        <Link to={`/dashboard/generate-invoice/client/${client.id}`}>
          <Button buttonText='View Invoice' />
        </Link>
      )}
    </div>
  );
};

export default ClientCard;
