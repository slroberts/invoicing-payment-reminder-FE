import { configureStore } from '@reduxjs/toolkit';

import clientsReducer from '../features/clients/clientsSlice';

export default configureStore({
  reducer: {
    clients: clientsReducer,
  },
});
