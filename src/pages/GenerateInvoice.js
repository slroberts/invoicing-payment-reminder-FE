/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { addLineItem } from '../features/invoice/invoiceSlice';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Input from '../components/Input';
import AddClientImg from '../images/undraw_fill_in_mie5.svg';
import InvoiceClientInfo from '../features/invoice/InvoiceClientInfo';
import InvoiceItemsTable from '../features/invoice/InvoiceItemsTable';

const GenerateInvoice = () => {
  const invoice = useSelector((state) => state.invoice.value);

  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({
    name: '',
    rate: '',
    hours: '',
  });

  const { id } = useParams();
  const dispatch = useDispatch();

  const rateTotal = () => {
    let sum = 0;
    // const clientIndex = clients.findIndex((client) => client.id == id);

    for (let item in invoice.items) {
      sum += parseFloat(item.rate * item.hours);
    }

    return sum;
  };

  const salesTax = Math.round(rateTotal() * 0.04875);

  const totalAmount = () => {
    return (rateTotal() + salesTax).toFixed(2);
  };

  const handleButtonClick = () => {
    setOpen(!open);

    setItem({
      name: '',
      rate: '',
      hours: '',
    });
  };

  const handleChange = (e) => {
    e.persist();
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = () => {
    console.log('Should delete itemById');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(!open);

    if (item.name && item.rate && item.hours) {
      dispatch(
        addLineItem({
          id,
          items: item,
        })
      );
    }
  };

  const renderInvoiceClientInfo = invoice
    .filter((client) => client.id === id)
    .map((client) => <InvoiceClientInfo key={client.id} client={client} />);

  const renderInvoiceItemsTable = invoice.map((invoice) => (
    <InvoiceItemsTable
      key={invoice.id}
      items={invoice.items}
      handleDelete={handleDelete}
    />
  ));

  return (
    <div>
      <p className='text-xl text-gray-400 mt-4'>Generate Invoice</p>
      <div className='flex flex-col justify-center md:flex-row mt-6 divide-y md:divide-x md:divide-y-0'>
        {renderInvoiceClientInfo}

        <div className='flex-grow pl-0 pt-12 md:pl-16 md:pt-0'>
          {invoice.items ? (
            <div>{renderInvoiceItemsTable}</div>
          ) : (
            <img
              src={AddClientImg}
              alt=''
              className='w-2/5 m-auto opacity-40'
            />
          )}
          <div className='float-right mt-6'>
            <Button buttonText='Add Item' handleOnClick={handleButtonClick} />
          </div>

          {invoice.items ? (
            <div>
              <div className='mt-24 divide-y'>
                <div className='flex justify-between pl-6'>
                  <div>Tax</div>
                  <div>US$ {salesTax}</div>
                </div>

                <div className='flex justify-between pt-6 pl-6 font-bold mt-4'>
                  <div>Total</div>
                  <div>US$ {totalAmount()}</div>
                </div>
              </div>
              <div className='float-right mt-12'>
                <Button buttonText='Send Invoice' />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <Modal
        open={open}
        setOpen={setOpen}
        handleButtonClick={handleButtonClick}
        modalTitle='Add Item'
      >
        <div className='mt-4' style={{ width: '27rem' }}>
          <form onSubmit={handleSubmit}>
            <Input
              htmlfor='name'
              label='Item Name'
              type='text'
              name='name'
              id='name'
              value={item.name}
              onChange={handleChange}
            />
            <Input
              htmlfor='rate'
              label='Rate'
              type='text'
              name='rate'
              id='rate'
              value={item.rate}
              onChange={handleChange}
            />
            <Input
              htmlfor='hours'
              label='Hours'
              type='text'
              name='hours'
              id='hours'
              value={item.hours}
              onChange={handleChange}
            />
          </form>
          <div className='py-3 sm:flex sm:flex-row-reverse'>
            <Button buttonText='Add Item' handleOnClick={handleSubmit} />
            <Button buttonText='Cancel' handleOnClick={handleButtonClick} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GenerateInvoice;
