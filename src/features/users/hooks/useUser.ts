import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { User, UserResponse, UserService } from '../types/User';
import { useEffect, useState } from 'react';

import { loadClientApi } from '@/features/users/utils/clientLoader';

export const useUser = () => {
  const queryClient = useQueryClient();

  const [clientApi, setClientApi] = useState<UserService>({} as UserService);

  useEffect(() => {
    loadClientApi().then((module) => setClientApi(module));
  }, []);

  const useGetUsers = (page: number = 1, pageSize: number = 10) =>
    useQuery<UserResponse>({
      queryKey: ['users', page, pageSize],
      queryFn: () => clientApi.getUsers(page, pageSize),
      enabled: !!clientApi,
    });

  const useGetUserById = (id: number | string) => {
    return useQuery<User>({
      queryKey: ['users', id],
      queryFn: () => clientApi.getUserById(id),
      enabled: !!clientApi,
    });
  };

  const createMutation = useMutation({
    mutationFn: (user: User) => clientApi?.createUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error) => {
      console.error('Error deleting user:', error.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: (user: User) => clientApi?.updateUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error) => {
      console.error('Error deleting user:', error.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => clientApi?.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error) => {
      console.error('Error deleting user:', error.message);
    },
  });

  return {
    useGetUsers,
    useGetUserById,
    createMutation,
    updateMutation,
    deleteMutation,
  };
};
