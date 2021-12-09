import React from 'react';

import AddClientImg from '../../images/undraw_fill_in_mie5.svg';
import ClientCard from './ClientCard';
import Button from '../../components/Button';

const ClientList = ({ clients, handleButtonClick }) => {
  const renderClients = clients.map((client, index) => (
    <ClientCard key={client.id} client={client} index={index} />
  ));

  return (
    <div className='mt-16 text-center w-full pb-16 md:pb-0'>
      {clients.length > 0 ? (
        <div className='flex justify-start flex-wrap'>{renderClients}</div>
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
