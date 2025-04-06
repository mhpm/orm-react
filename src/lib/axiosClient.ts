import axios, { AxiosInstance } from 'axios';

let axiosClientInstance: AxiosInstance | null = null;

export const createAxiosClient = (baseURL?: string): AxiosInstance => {
  if (axiosClientInstance) {
    return axiosClientInstance;
  }

  axiosClientInstance = axios.create({
    baseURL: baseURL || 'https://orm-python-supabase-api.onrender.com',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosClientInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return axiosClientInstance;
};
