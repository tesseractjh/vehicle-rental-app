import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API,
});

apiClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error)
);

export default apiClient;
