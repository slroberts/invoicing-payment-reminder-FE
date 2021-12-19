/* eslint-disable eqeqeq */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { nanoid } from '@reduxjs/toolkit';
import { jsPDF } from 'jspdf';

import useForm from '../hooks/useForm';
import { addLineItem } from '../features/invoice/invoiceSlice';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Input from '../components/Input';
import AddClientImg from '../images/undraw_fill_in_mie5.svg';
import InvoiceClientInfo from '../features/invoice/InvoiceClientInfo';
import InvoiceItemsTable from '../features/invoice/InvoiceItemsTable';
import InvoiceTaxAndTotal from '../features/invoice/InvoiceTaxAndTotal';

const GenerateInvoice = () => {
  const invoices = useSelector((state) => state.invoice.value);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { values, open, setOpen, toggleModal, handleChange, handleSubmit } =
    useForm({
      name: '',
      rate: '',
      hours: '',
    });

  const onSubmit = (e) => {
    if (values.name && values.rate && values.hours) {
      dispatch(
        addLineItem({
          id,
          item: {
            id: nanoid(),
            name: values.name,
            rate: values.rate,
            hours: values.hours,
          },
        })
      );
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF('l', 'pt', 'tabloid');

    doc.html(document.querySelector('#invoice'), {
      callback: function (pdf) {
        pdf.save(
          invoices
            .filter((invoice) => invoice.id === id)
            .map((invoice) => {
              return `invoice-${invoice.id}.pdf`;
            })
        );
      },
      margin: [0, 24, 0, 24],
      x: 32,
      y: 32,
    });
  };

  const renderInvoice = invoices
    .filter((client) => client.id === id)
    .map((invoice, index) => (
      <div
        key={invoice.id}
        className='flex flex-col justify-center md:flex-row mt-6 divide-y md:divide-x md:divide-y-0'
      >
        <InvoiceClientInfo key={invoice.id} invoice={invoice} />

        <div className='flex-grow pl-0 pt-12 md:pl-16 md:pt-0'>
          {invoices[index].items.length > 0 ? (
            <div>
              <InvoiceItemsTable items={invoice.items} />

              <div className='float-right mt-6' data-html2canvas-ignore='true'>
                <Button buttonText='Add Item' handleOnClick={toggleModal} />
              </div>

              <InvoiceTaxAndTotal invoice={invoice} />

              <div className='float-right mt-12' data-html2canvas-ignore='true'>
                <Button
                  buttonText='Download Invoice'
                  handleOnClick={generatePDF}
                />
              </div>
            </div>
          ) : (
            <div>
              <img
                src={AddClientImg}
                alt=''
                className='w-2/5 m-auto opacity-40'
              />
              <div className='float-right mt-6' data-html2canvas-ignore='true'>
                <Button buttonText='Add Item' handleOnClick={toggleModal} />
              </div>
            </div>
          )}
        </div>
      </div>
    ));

  return (
    <div id='invoice'>
      <p className='text-lg font-semibold text-gray-400 mt-4'>{`Invoice # ${id}`}</p>

      {renderInvoice}

      <Modal
        open={open}
        setOpen={setOpen}
        toggleModal={toggleModal}
        modalTitle='Add Item'
      >
        <div className='mt-4' style={{ width: '27rem' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              htmlfor='name'
              label='Item Name'
              type='text'
              name='name'
              id='name'
              value={values.name}
              onChange={handleChange}
            />
            <Input
              htmlfor='rate'
              label='Rate'
              type='text'
              name='rate'
              id='rate'
              value={values.rate}
              onChange={handleChange}
            />
            <Input
              htmlfor='hours'
              label='Hours'
              type='text'
              name='hours'
              id='hours'
              value={values.hours}
              onChange={handleChange}
            />
          </form>
          <div className='py-3 sm:flex sm:flex-row-reverse'>
            <Button
              buttonText='Add Item'
              handleOnClick={handleSubmit(onSubmit)}
            />
            <Button buttonText='Cancel' handleOnClick={toggleModal} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GenerateInvoice;
