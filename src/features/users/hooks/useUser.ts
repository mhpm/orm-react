import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { User, UserResponse } from '../types/User';
import { useEffect, useState } from 'react';

const loadClientApi = async () => {
  const client = import.meta.env.VITE_API_CLIENT;

  switch (client) {
    case 'supabase':
      return await import('@/features/users/services/userService');
    case 'graphql':
      return await import('@/features/users/api/users-graphql');
    default:
      return await import('@/features/users/api/users-axios');
  }
};

export const useUser = () => {
  const queryClient = useQueryClient();

  const [clientApi, setClientApi] = useState<any>(null);

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
  });

  const updateMutation = useMutation({
    mutationFn: (user: User) => clientApi?.updateUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number | string) => clientApi?.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
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
