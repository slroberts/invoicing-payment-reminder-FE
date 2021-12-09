import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};
const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    addClient(state, action) {
      state.value.push(action.payload);
    },
    addLineItem(state, action) {
      for (const invoice of state.value) {
        if (invoice.id === action.payload.id) {
          invoice.items.push(action.payload.item);
        }
      }
    },
    deleteLineItem(state, action) {
      for (const invoice of state.value) {
        invoice.items.splice(action.payload.item, 1);
      }
    },
  },
});

export const { addClient, addLineItem, deleteLineItem } = invoiceSlice.actions;

export default invoiceSlice.reducer;
