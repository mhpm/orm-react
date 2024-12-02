import { createClient } from '@/lib/clienFactory';
import { User, UserResponse } from '../types/User';
import { AxiosInstance } from 'axios';

const axiosClient = createClient(
  'axios',
  import.meta.env.DEV
    ? 'http://localhost:8000'
    : 'https://orm-python-supabase-api.onrender.com'
) as AxiosInstance;

export const fetchUsers = (page: number = 1, limit: number = 10) =>
  axiosClient
    .get<UserResponse[]>('/users', { params: { page, limit } }) // Pass pagination params
    .then((response) => response.data);

export const fetchUserById = (id: number | string) =>
  axiosClient.get<User>(`/users/${id}`).then((response) => response.data);

export const createUser = (user: User) =>
  axiosClient.post<User>('/users', user).then((response) => response.data);

export const updateUser = (user: User) =>
  axiosClient
    .put<User>(`/users/${user.id}`, user)
    .then((response) => response.data);

export const deleteUser = (id: number | string) =>
  axiosClient.delete<User>(`/users/${id}`).then((response) => response.data);
