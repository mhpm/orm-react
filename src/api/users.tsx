import { User } from '../types/User';

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL_USERS as string;

export const fetchUsers = async () => {
  const response = await axios.get<User[]>(API_URL);
  return response.data;
};

export const fetchUser = async (id: string): Promise<User> => {
  const response = await axios.get<User>(`${API_URL}/${id}`);
  return response.data;
};

export const createUser = async (user: User) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

export const updateUser = async (user: User) => {
  const response = await axios.put(`${API_URL}/${user.id}`, user);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
