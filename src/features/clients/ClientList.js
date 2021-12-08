import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { clientDeleted } from './clientsSlice';
import Button from '../../components/Button';
import AddClientImg from '../../images/undraw_fill_in_mie5.svg';

const ClientList = ({ clients, handleButtonClick }) => {
  const dispatch = useDispatch();

  const renderedClients = clients.map((client) => (
    <div
      key={client.id}
      className='flex flex-col justify-center  border border-opacity-60 text-center w-full p-6 lg:w-1/3 md:w-2/4 hover:bg-gray-200 hover:border-gray-300'
    >
      <h2 className='text-lg text-gray-600 mb-4'>{client.name}</h2>
      <Link to={`/dashboard/generate-invoice/client/${client.id}`}>
        <Button buttonText='Generate Invoice' />
      </Link>
      <button
        onClick={() => dispatch(clientDeleted(client.id))}
        className='w-24 float-right'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
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
    </div>
  ));

  return (
    <div className='mt-16 text-center w-full pb-16 md:pb-0'>
      {clients.length > 0 ? (
        <div className='flex justify-start flex-wrap'>{renderedClients}</div>
      ) : (
        <img src={AddClientImg} alt='' className='w-2/5 m-auto opacity-40' />
      )}

      <div className='mt-10'>
        <Button buttonText='Add Client' handleOnClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default ClientList;
