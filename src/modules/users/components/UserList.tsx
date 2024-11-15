import { memo, useState } from 'react';
import { User } from '@/modules/users/types/User';
import { Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import { useUser } from '@/modules/users/hooks/useUser';
import { useTranslation } from 'react-i18next';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { CgSpinner } from 'react-icons/cg';
import { useToast } from '@/components/ui/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserList = memo(() => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [deletingUserId, setDeletingUserId] = useState<number | null>(null);
  const { useGetUsers, createMutation, deleteMutation } = useUser();
  const { data: users, isLoading, isError, error } = useGetUsers();

  if (isError) {
    throw new Error(error?.message);
  }

  const handleCreate = () => {
    createMutation.mutate(
      {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: 'changeme',
        role: 'user',
        avatar: faker.image.avatarGitHub(),
      },
      {
        onSuccess: () => {
          toast({
            className: 'bg-woodsmoke-950 text-green-400 p-4',
            title: `${t('user')} created successfully`,
          });
        },
        onError: () => {
          toast({
            className: 'bg-woodsmoke-950 text-red-400 p-4',
            title: `Error on create user`,
          });
        },
      }
    );
  };

  const handleDelete = (userId: number) => {
    setDeletingUserId(userId);
    deleteMutation.mutate(userId, {
      onSuccess: () => {
        toast({
          className: 'bg-woodsmoke-950 text-green-400 p-4',
          title: `${t('user')} deleted`,
        });
      },
      onError: () => {
        toast({
          className: 'bg-woodsmoke-950 text-red-400 p-4',
          title: `Error on delete user`,
        });
      },
      onSettled: () => {
        setDeletingUserId(null);
      },
    });
  };

  return (
    <div>
      <h2 className="flex justify-between items-center font-extrabold text-center p-5">
        {isLoading
          ? `${t('loading')}...`
          : `${t('userList')}: ${users?.length}`}
        <button className="text-sm button" onClick={handleCreate}>
          {createMutation.isPending ? (
            <CgSpinner className="animate-spin h-5 w-5" />
          ) : (
            t('addUser')
          )}
        </button>
      </h2>
      <div className="w-full h-fit rounded-lg">
        {users?.map((item: User) => (
          <div key={item.id} className="relative">
            <Row
              user={item}
              onDelete={handleDelete}
              isLoading={deletingUserId === item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

const Row = ({
  user,
  isLoading,
  onDelete,
}: {
  user: User;
  isLoading: boolean;
  onDelete: (id: number) => void;
}) => {
  return (
    <div
      key={user.id}
      className="flex justify-between items-center text-left border-b border-gray-600 p-8 px-4 h-[50px]"
    >
      <div className="w-[30px]">{user.id}</div>
      <div className="w-[50px]">
        <Avatar>
          <AvatarImage src={user.avatar} alt="@shadcn" loading="lazy" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-[100px] text-ellipsis text-nowrap overflow-hidden">
        {user.first_name}
      </div>
      <div className="w-[100px] text-ellipsis text-nowrap overflow-hidden">
        {user.last_name}
      </div>
      <div className="w-[250px]">{user.email}</div>
      <div className="w-[80px]">
        <div
          className={`py-1 px-3 rounded-full w-[70px] text-center text-sm ${
            user.role === 'admin' ? 'bg-sky-950' : 'bg-zinc-700'
          }`}
        >
          {user.role}
        </div>
      </div>
      <Link to={`users/edit/${user.id}`}>
        <FaEdit className="h-5 w-5" />
      </Link>
      <button
        onClick={() => onDelete(user.id as number)}
        className="text-red-400"
        disabled={isLoading}
      >
        {isLoading ? (
          <CgSpinner className="animate-spin h-5 w-5" />
        ) : (
          <FaTrash className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default UserList;
