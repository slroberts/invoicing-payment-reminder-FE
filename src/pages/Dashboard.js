import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { clientAdded } from '../features/clients/clientsSlice';
import Input from '../components/Input';
import Button from '../components/Button';
import Modal from '../components/Modal';
import ClientList from '../features/clients/ClientList';

const Dashboard = () => {
  const clients = useSelector((state) => state.clients);

  const [open, setOpen] = useState(false);
  const [client, setClient] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const dispatch = useDispatch();

  const handleButtonClick = (e) => {
    setOpen(!open);

    setClient({
      name: '',
      email: '',
      phone: '',
    });
  };

  const handleChange = (e) => {
    e.persist();
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(!open);

    if (client.name && client.email && client.phone) {
      dispatch(
        clientAdded({
          id: nanoid(),
          name: client.name,
          email: client.email,
          phone: client.phone,
        })
      );
    }
  };

  return (
    <div>
      <div>
        <p className='text-xl text-gray-400 mt-16'>
          {clients.length > 0
            ? 'Generate Invoice or Add Client'
            : 'Add Client To Generate Invoice'}
        </p>

        <Modal
          open={open}
          setOpen={setOpen}
          handleButtonClick={handleButtonClick}
          modalTitle='Client Information'
        >
          <div className='mt-4' style={{ width: '27rem' }}>
            <form onSubmit={handleSubmit}>
              <Input
                htmlfor='name'
                label='Full Name'
                type='text'
                name='name'
                id='clientName'
                value={client.name}
                onChange={handleChange}
              />
              <Input
                htmlfor='email'
                label='Email'
                type='email'
                name='email'
                id='clientEmail'
                value={client.email}
                onChange={handleChange}
                autoComplete='email'
              />
              <Input
                htmlfor='phone'
                label='Phone Number'
                type='tel'
                name='phone'
                id='clientPhone'
                value={client.phone}
                onChange={handleChange}
              />
            </form>
            <div className='py-3 sm:flex sm:flex-row-reverse'>
              <Button buttonText='Save Client' handleOnClick={handleSubmit} />
              <Button buttonText='Cancel' handleOnClick={handleButtonClick} />
            </div>
          </div>
        </Modal>

        <ClientList clients={clients} handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Dashboard;
