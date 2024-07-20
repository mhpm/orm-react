import { User } from '@/types/User';
import { Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import { useUser } from '@/hooks/useUser';
import { useTranslation } from 'react-i18next';

const UserList = () => {
  const { t } = useTranslation();
  const { useGetUsers, createMutation, deleteMutation } = useUser();
  const { data: users, isLoading } = useGetUsers();

  const handleCreate = () => {
    createMutation.mutate({
      id: faker.string.alphanumeric(4),
      name: faker.person.fullName(),
      email: faker.internet.email(),
    });
  };
  
  return (
    <div>
      <h2 className="flex justify-between items-center font-extrabold text-center p-5">
        {isLoading ? `${t('loading')}...` : `${t('userList')}: ${users?.length}`}
        <button className="text-sm" onClick={handleCreate}>
          {createMutation.isPending ? `${t('loading')}...` : t('addUser')}
        </button>
      </h2>
      <div className="w-[800px] h-[500px] rounded-lg">
        {users?.map((item: User) => (
          <div
            key={item.id}
            className="flex justify-between text-left border-b border-gray-600 p-2 px-4 mb-3"
          >
            <div className="w-[60px]">{item.id}</div>
            <div className="w-[150px] text-ellipsis text-nowrap overflow-hidden">
              {item.name}
            </div>
            <div className="w-[250px]">{item.email}</div>
            <Link
              to={`users/edit/${item.id}`}
              className="text-green-600 text-xs p-2"
            >
              {t('edit')}
            </Link>
            <button
              onClick={() => deleteMutation.mutate(item.id as string)}
              className="text-red-400 text-xs p-2"
            >
              {t('delete')}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
