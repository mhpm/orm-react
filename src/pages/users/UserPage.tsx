import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchUsers, createUser, deleteUser } from '../../api/users';
import { Link } from "react-router-dom";
import { User } from '../../types/User';

function UserPage() {
  const queryClient = useQueryClient();

  const { data: users, isLoading } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => fetchUsers(),
  });

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

  const handleCreate = () => {
    createMutation.mutate({
      name: 'Michelle Perez Morales',
      email: 'mhpm@gmail.com',
    });
  };

  return (
    <div className="main h-[100vh] w-[100vw]">
      <div className="flex justify-center w-full p-[20px]">
        <div>
          <h2 className="flex justify-between items-center font-extrabold text-center p-5">
            {isLoading ? 'Loading...' : `User List: ${users?.length}`}
            <button className="text-sm" onClick={handleCreate}>
              {createMutation.isPending ? 'Loading...' : 'Add User'}
            </button>
          </h2>
          <div className="w-[600px] h-[500px] rounded-lg">
            {users?.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-left border-b border-gray-600 p-2 px-4 mb-3"
              >
                <div className="w-[60px]">{item.id}</div>
                <div className="w-[150px] text-ellipsis text-nowrap overflow-hidden">
                  {item.name}
                </div>
                <div className="w-[180px]">{item.email}</div>
                <Link to={`users/edit/:${item.id}`} className="text-green-600 text-xs p-2">Edit</Link>
                <button
                  onClick={() => deleteMutation.mutate(item.id as string)}
                  className="text-red-400 text-xs p-2"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
