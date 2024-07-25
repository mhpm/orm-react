import { User } from '../types/User';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL_USERS as string;

const apiClient = axios.create({
  baseURL: API_URL,
});

export const fetchUsers = async () => {
  const { data } = await apiClient.get<User[]>('/');
  return data;
};

export const fetchUserById = async (id: string): Promise<User> => {
  const { data } = await apiClient.get<User>(`/${id}`);
  return data;
};

export const createUser = async (user: User) => {
  const { data } = await apiClient.post<User>('/', user);
  return data;
};

export const updateUser = async (user: User) => {
  const { data } = await apiClient.put<User>(`/${user.id}`, user);
  return data;
};

export const deleteUser = async (id: string) => {
  const { data } = await apiClient.delete<User>(`/${id}`);
  return data;
};
