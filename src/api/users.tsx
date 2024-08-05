import { User } from '../types/User';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL_USERS as string;

const apiClient = axios.create({
  baseURL: API_URL,
});

export const fetchUsers = () =>
  apiClient.get<User[]>('/').then((response) => response.data);

export const fetchUserById = (id: string) =>
  apiClient.get<User>(`/${id}`).then((response) => response.data);

export const createUser = (user: User) =>
  apiClient.post<User>('/', user).then((response) => response.data);

export const updateUser = (user: User) =>
  apiClient.put<User>(`/${user.id}`, user).then((response) => response.data);

export const deleteUser = (id: string) =>
  apiClient.delete<User>(`/${id}`).then((response) => response.data);
