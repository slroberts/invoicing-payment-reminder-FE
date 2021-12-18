import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import useForm from '../hooks/useForm';
import { addClient } from '../features/clients/clientsSlice';
import Input from '../components/Input';
import Button from '../components/Button';
import Modal from '../components/Modal';
import ClientList from '../features/clients/ClientList';

const Dashboard = () => {
  const clients = useSelector((state) => state.clients.value);
  const dispatch = useDispatch();

  const { values, open, setOpen, toggleModal, handleChange, handleSubmit } =
    useForm({
      name: '',
      email: '',
      phone: '',
    });

  const onSubmit = (values) => {
    if (values.name && values.email && values.phone) {
      dispatch(
        addClient({
          id: nanoid(),
          name: values.name,
          email: values.email,
          phone: values.phone,
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

        <ClientList clients={clients} toggleModal={toggleModal} />

        <Modal
          open={open}
          setOpen={setOpen}
          toggleModal={toggleModal}
          modalTitle='Client Information'
        >
          <div className='mt-4' style={{ width: '27rem' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                htmlfor='name'
                label='Full Name'
                type='text'
                name='name'
                id='clientName'
                value={values.name}
                onChange={handleChange}
              />
              <Input
                htmlfor='email'
                label='Email'
                type='email'
                name='email'
                id='clientEmail'
                value={values.email}
                onChange={handleChange}
                autoComplete='email'
              />
              <Input
                htmlfor='phone'
                label='Phone Number'
                type='tel'
                name='phone'
                id='clientPhone'
                value={values.phone}
                onChange={handleChange}
              />
            </form>
            <div className='py-3 sm:flex sm:flex-row-reverse'>
              <Button
                buttonText='Save Client'
                handleOnClick={handleSubmit(onSubmit)}
              />
              <Button buttonText='Cancel' handleOnClick={toggleModal} />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
