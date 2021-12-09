import React from 'react';
import Button from '../../components/Button';

const InvoiceTaxAndTotal = ({ invoice }) => {
  const rateTotal = () => {
    let sum = 0;

    for (let i of invoice) {
      for (let item of i.items) {
        sum += parseFloat(item.rate * item.hours);
      }
    }

    return sum;
  };

  const salesTax = Math.round(rateTotal() * 0.04875);

  const totalAmount = () => {
    return (rateTotal() + salesTax).toFixed(2);
  };

  return (
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

        <div className='float-right mt-12'>
          <Button buttonText='Send Invoice' />
        </div>
      </div>
    </div>
  );
};

export default InvoiceTaxAndTotal;
