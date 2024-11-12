// axiosClient.ts
import axios from 'axios';

export const createAxiosClient = (baseURL: string) => {
  const axiosClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  axiosClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  return axiosClient;
};
