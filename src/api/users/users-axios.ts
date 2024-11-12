import { createClient } from '@/lib/clienFactory';
import { User } from '@/modules/users/types/User';
import { AxiosInstance } from 'axios';

const axiosClient = createClient(
  'axios',
  'http://localhost:3000/users'
) as AxiosInstance;

export const fetchUsers = () =>
  axiosClient.get<User[]>('/').then((response) => response.data);

export const fetchUserById = (id: number | string) =>
  axiosClient.get<User>(`/${id}`).then((response) => response.data);

export const createUser = (user: User) =>
  axiosClient.post<User>('/', user).then((response) => response.data);

export const updateUser = (user: User) =>
  axiosClient.put<User>(`/${user.id}`, user).then((response) => response.data);

export const deleteUser = (id: number | string) =>
  axiosClient.delete<User>(`/${id}`).then((response) => response.data);
