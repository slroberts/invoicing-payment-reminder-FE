import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'Doe Inc',
    email: 'johndoe@email.com',
    phone: '8888888888',
    items: [
      {
        id: 1,
        name: 'Items 2',
        rate: '44.31',
        hours: '6',
      },
      {
        id: 2,
        name: 'Items 3',
        rate: '62.67',
        hours: '2',
      },
      {
        id: 3,
        name: 'Items 4',
        rate: '47.85',
        hours: '2',
      },
    ],
  },
  {
    id: 2,
    name: 'Test Company',
    email: 'janedoe@email.com',
    phone: '8889999999',
    items: [
      {
        id: 1,
        name: 'Items 1',
        rate: '40',
        hours: '2',
      },
      {
        id: 2,
        name: 'Work Shit',
        rate: '60',
        hours: '1',
      },
      {
        id: 3,
        name: 'Items 4',
        rate: '40',
        hours: '2',
      },
    ],
  },
];

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    clientAdded(state, action) {
      state.push(action.payload);
    },
    clientDeleted(state, action) {
      return (state = state.filter(({ id }) => id !== action.payload));
    },
  },
});

export const { clientAdded, clientDeleted } = clientsSlice.actions;

export default clientsSlice.reducer;
