import { createClient } from '@/lib/clienFactory';
import { User, UserResponse } from '../types/User';
import { AxiosInstance } from 'axios';

const axiosClient = createClient('axios') as AxiosInstance;

export const getUsers = (
  page: number = 1,
  pageSize: number = 10
): Promise<UserResponse> =>
  axiosClient
    .get<UserResponse>('/users', { params: { page, pageSize } })
    .then((response) => response.data);

export const getUserById = (id: number | string) =>
  axiosClient.get<User>(`/users/${id}`).then((response) => response.data);

export const createUser = (user: User) =>
  axiosClient.post<User>('/users', user).then((response) => response.data);

export const updateUser = (user: User) =>
  axiosClient
    .put<User>(`/users/${user.id}`, user)
    .then((response) => response.data);

export const deleteUser = (id: number | string) =>
  axiosClient.delete<User>(`/users/${id}`).then((response) => response.data);
