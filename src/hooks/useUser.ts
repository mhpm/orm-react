import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  fetchUsers,
  createUser,
  deleteUser,
  updateUser,
  fetchUserById,
} from '@/api/users/users-supabase';
import { User } from '@/types/User';

export const useUser = () => {
  const queryClient = useQueryClient();

  const useGetUsers = () =>
    useQuery<User[]>({
      queryKey: ['users'],
      queryFn: () => fetchUsers(),
    });

  const useGetUserById = (id: number | string) => {
    return useQuery<User>({
      queryKey: ['users', id],
      queryFn: () => fetchUserById(id),
    });
  };

  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  return {
    useGetUsers,
    useGetUserById,
    createMutation,
    deleteMutation,
    updateMutation,
  };
};
