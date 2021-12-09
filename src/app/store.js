import { configureStore } from '@reduxjs/toolkit';

import clientsReducer from '../features/clients/clientsSlice';
import invoiceSlice from '../features/invoice/invoiceSlice';

export default configureStore({
  reducer: {
    clients: clientsReducer,
    invoice: invoiceSlice,
  },
});
