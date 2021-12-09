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
      state.value.forEach((invoice) => {
        if (invoice.id === action.payload.id) {
          return (state = state.value.items.push(action.payload.item));
        }
      });
    },
  },
});

export const { addClient, addLineItem } = invoiceSlice.actions;

export default invoiceSlice.reducer;
