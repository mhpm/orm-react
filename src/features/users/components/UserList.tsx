import { memo, useCallback, useState } from 'react';
import { User } from '../types/User';
import { Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import { useUser } from '../hooks/useUser';
import { useTranslation } from 'react-i18next';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { CgSpinner } from 'react-icons/cg';
import { useToast } from '@/components/ui/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const UserList = memo(() => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [deletingUserId, setDeletingUserId] = useState<number | null>(null);
  const { useGetUsers, createMutation, deleteMutation } = useUser();
  const [page, setPage] = useState(1);
  const [limit] = useState(9);
  const { data, isLoading, isError, error } = useGetUsers(page, limit);

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

  const handleDelete = useCallback((userId: number) => {
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
  }, []);

  function hasNext() {
    if (!data) return false; // If no data is available, there can't be a next page

    const totalPages = Math.ceil(data.total / limit); // Calculate total pages
    const currentPage = data.page; // Current page number

    return currentPage < totalPages; // Check if there is another page
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="flex justify-between items-center font-extrabold text-center">
        {isLoading
          ? `${t('loading')}...`
          : `${t('userList')}: ${data?.users?.length}`}
        <button className="text-sm button" onClick={handleCreate}>
          {createMutation.isPending ? (
            <CgSpinner className="animate-spin h-5 w-5" />
          ) : (
            t('addUser')
          )}
        </button>
      </h2>
      <div className="w-full h-fit rounded-lg">
        {data?.users?.map((item: User) => (
          <Row
            key={item.id}
            user={item}
            onDelete={handleDelete}
            isLoading={deletingUserId === item.id}
          />
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          {page !== 1 && (
            <PaginationItem className="cursor-pointer">
              <PaginationPrevious onClick={() => setPage(page - 1)} />
            </PaginationItem>
          )}
          <PaginationItem className="cursor-pointer">
            <PaginationLink>{page}</PaginationLink>
          </PaginationItem>
          {hasNext() && (
            <PaginationItem className="cursor-pointer">
              <PaginationNext onClick={() => setPage(page + 1)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
});

const Row = memo(
  ({
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
        className="flex gap-2 flex-col text-center md:flex-row justify-between items-center md:text-left border-b border-gray-600 p-8 px-4 h-fit md:h-[50px]"
      >
        <div className="hidden md:block">{user.id}</div>
        <div className="md:w-[50px]">
          <Avatar>
            <AvatarImage src={user.avatar} alt="avatar" loading="lazy" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-between w-full visible md:hidden">
          <span className="font-extrabold">Id:</span>
          {user.id}
        </div>
        <div className="flex justify-between w-full md:w-[100px] text-ellipsis text-nowrap overflow-hidden">
          <span className="visible font-extrabold md:hidden">Name:</span>
          {user.first_name}
        </div>
        <div className="flex justify-between w-full md:w-[100px] text-ellipsis text-nowrap overflow-hidden">
          <span className="visible font-extrabold md:hidden">Last Name:</span>
          {user.last_name}
        </div>
        <div className="flex justify-between w-full md:w-[250px]">
          <span className="visible font-extrabold md:hidden">Email:</span>
          {user.email}
        </div>
        <div className="flex justify-between w-full md:w-[80px]">
          <span className="visible font-extrabold md:hidden">Role:</span>
          <div
            className={`py-1 px-3 rounded-full md:w-[70px] text-center text-sm ${
              user.role === 'admin' ? 'bg-sky-950' : 'bg-zinc-700'
            }`}
          >
            {user.role}
          </div>
        </div>
        <div className="flex gap-2 w-fit">
          <Link className="button w-full" to={`users/edit/${user.id}`}>
            <FaEdit className="h-5 w-5" />
          </Link>
          <button
            onClick={() => onDelete(user.id as number)}
            className="text-red-400 button w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <CgSpinner className="animate-spin h-5 w-5" />
            ) : (
              <FaTrash className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    );
  }
);

export default UserList;
