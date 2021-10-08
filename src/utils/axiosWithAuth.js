import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('Token');

  return axios.create({
    baseURL: 'https://api-invoice-payment-reminder.herokuapp.com',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
