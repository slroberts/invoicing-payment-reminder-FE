import React from 'react';
import { useDispatch } from 'react-redux';
import { capitalizeWords } from '../../helpers/helperMethods';

import { deleteLineItem } from './invoiceSlice';

const InvoiceItemsTable = ({ items }) => {
  const dispatch = useDispatch();

  const renderInvoiceItems = items.map((item, index) => (
    <tr key={item.id}>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm font-medium text-gray-900'>
          {capitalizeWords(item.name)}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>$ {item.rate}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>{item.hours}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
        <div
          onClick={() => dispatch(deleteLineItem(index))}
          className='text-indigo-600 hover:text-indigo-900'
        >
          Delete
        </div>
      </td>
    </tr>
  ));

  return (
    <table className='min-w-full divide-y divide-gray-200'>
      <thead className='bg-gray-50'>
        <tr>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Item
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Rate
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Hours
          </th>
          <th scope='col' className='relative px-6 py-3'>
            <span className='sr-only'>Delete</span>
          </th>
        </tr>
      </thead>
      <tbody className='bg-white divide-y divide-gray-200'>
        {renderInvoiceItems}
      </tbody>
    </table>
  );
};

export default InvoiceItemsTable;
