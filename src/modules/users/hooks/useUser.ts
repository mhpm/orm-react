import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import * as supabaseApi from '@/api/users/users-supabase';
// import * as axiosApi from '@/api/users/users-axios';
import * as graphqlClient from '@/api/users/users-graphql';
import { User } from '@/modules/users/types/User';

// const isSupabase = import.meta.env.MODE !== 'development';

const clientApi = graphqlClient;

export const useUser = () => {
  const queryClient = useQueryClient();

  const useGetUsers = () =>
    useQuery<User[]>({
      queryKey: ['users'],
      queryFn: () => clientApi.fetchUsers(),
    });

  const useGetUserById = (id: number | string) => {
    return useQuery<User>({
      queryKey: ['users', id],
      queryFn: () => clientApi.fetchUserById(id),
    });
  };

  const createMutation = useMutation({
    mutationFn: clientApi.createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: clientApi.deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: clientApi.updateUser,
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
