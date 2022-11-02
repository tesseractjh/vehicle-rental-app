import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API,
});

axios.interceptors.request.use(
  (config) => config,
  (error) => error
);

axios.interceptors.response.use(
  (res) => res,
  (error) => error
);

export default apiClient;
