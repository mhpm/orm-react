import { faker } from '@faker-js/faker';
import { Link } from "react-router-dom";
import { User } from '@/types/User';
import { useUser } from '@/hooks/useUser';

function UserPage() {
  const { useGetUsers, createMutation, deleteMutation } = useUser()
  const { data: users, isLoading } = useGetUsers()

  const handleCreate = () => {
    createMutation.mutate({
      id: faker.string.alphanumeric(4),
      name: faker.person.fullName(),
      email: faker.internet.email(),
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
          <div className="w-[800px] h-[500px] rounded-lg">
            {users?.map((item:User) => (
              <div
                key={item.id}
                className="flex justify-between text-left border-b border-gray-600 p-2 px-4 mb-3"
              >
                <div className="w-[60px]">{item.id}</div>
                <div className="w-[150px] text-ellipsis text-nowrap overflow-hidden">
                  {item.name}
                </div>
                <div className="w-[250px]">{item.email}</div>
                <Link to={`users/edit/${item.id}`} className="text-green-600 text-xs p-2">Edit</Link>
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
