import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { User } from '../types/User';

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => fetchUser(),
  });
};

export const CreateUser = (user: User) => {
  return useQuery<User>({
    queryKey: ['users', user],
    queryFn: () => postUser(user),
  });
};

// export const useUpdateUser = () => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     (updatedUser: User) =>
//       fetch(`/api/users/${updatedUser.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedUser),
//       }).then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       }),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(['users']);
//         queryClient.invalidateQueries(['user']);
//       },
//     }
//   );
// };
