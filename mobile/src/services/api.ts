import axios from 'axios';

const api = axios.create({
  baseURL: 'http://179.83.158.181:3333',
});

export default api;
