import { User } from '@/types/User';
import { Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import { useUser } from '@/hooks/useUser';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useToast } from '@/components/ui/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useModal } from '@/components/modal/useModal';

const UserList = () => {
  const { openModal } = useModal();
  const { t } = useTranslation();
  const { toast } = useToast();
  const { useGetUsers, createMutation, deleteMutation } = useUser();
  const { data: users, isLoading } = useGetUsers();
  const [deletingUserId, setDeletingUserId] = useState<number | null>(null);

  const handleCreate = () => {
    createMutation.mutate({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      avatar: faker.image.avatarGitHub(),
    });
  };

  const handleDelete = (userId: number) => {
    setDeletingUserId(userId);
    deleteMutation.mutate(userId, {
      onSuccess: () => {
        toast({
          className: 'bg-woodsmoke-950 text-green-400 p-4',
          title: `${t('user')} eliminado correctamente`,
        });
      },
      onError: () => {
        toast({
          className: 'bg-woodsmoke-950 text-red-400 p-4',
          title: `Error, usuario no se pudo eliminar`,
        });
      },
      onSettled: () => {
        setDeletingUserId(null);
      },
    });
  };

  return (
    <div>
      <button
        className="button"
        onClick={() =>
          openModal('My New Title', <div>Hello <p>paragraophe</p></div>, () =>
            console.log('modal closed')
          )
        }
      >
        Open modal
      </button>
      <h2 className="flex justify-between items-center font-extrabold text-center p-5">
        {isLoading
          ? `${t('loading')}...`
          : `${t('userList')}: ${users?.length}`}
        <button className="text-sm button" onClick={handleCreate}>
          {createMutation.isPending ? (
            <ArrowPathIcon className="animate-spin h-5 w-5" />
          ) : (
            t('addUser')
          )}
        </button>
      </h2>
      <div className="w-full h-fit rounded-lg">
        {users?.map((item: User) => (
          <div
            key={item.id}
            className="flex justify-between items-center text-left border-b border-gray-600 p-2 px-4 mb-3"
          >
            <div className="w-[40px]">{item.id}</div>
            <div className="w-[50px]">
              <Avatar>
                <AvatarImage src={item.avatar} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="w-[100px] text-ellipsis text-nowrap overflow-hidden">
              {item.first_name}
            </div>
            <div className="w-[100px] text-ellipsis text-nowrap overflow-hidden">
              {item.last_name}
            </div>
            <div className="w-[250px]">{item.email}</div>
            <Link
              to={`users/edit/${item.id}`}
              className="text-green-600 text-sm button"
            >
              {t('edit')}
            </Link>
            <button
              onClick={() => handleDelete(item.id as number)}
              className="text-red-400 text-sm button"
              disabled={deleteMutation.isPending}
            >
              {deletingUserId === item.id ? (
                <ArrowPathIcon className="animate-spin h-5 w-5" />
              ) : (
                t('delete')
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
