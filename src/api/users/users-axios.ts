import { createClient } from '@/lib/clienFactory';
import { User } from '@/modules/users/types/User';
import { AxiosInstance } from 'axios';

const axiosClient = createClient(
  'axios',
  'https://orm-flask-python-api.onrender.com'
) as AxiosInstance;

export const fetchUsers = () =>
  axiosClient.get<User[]>('/users').then((response) => response.data);

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
