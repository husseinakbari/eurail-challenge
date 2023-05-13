import axios from 'axios';

const network = axios.create({
  baseURL: 'https://randomuser.me/api',
  headers: {
    accept: 'application/json',
  },
});

export default network;
