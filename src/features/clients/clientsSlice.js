import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};
const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    addClient(state, action) {
      state.value.push(action.payload);
    },
    deleteClient(state, action) {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addClient, deleteClient } = clientsSlice.actions;

export default clientsSlice.reducer;
