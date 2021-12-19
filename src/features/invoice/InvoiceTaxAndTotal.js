import React from 'react';

const InvoiceTaxAndTotal = ({ invoice }) => {
  const rateTotal = () => {
    let sum = 0;

    for (let item of invoice.items) {
      sum += parseFloat(item.rate * item.hours);
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
      </div>
    </div>
  );
};

export default InvoiceTaxAndTotal;
