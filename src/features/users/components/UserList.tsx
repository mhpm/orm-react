import { memo, useCallback, useEffect, useState } from 'react';
import { User, UserResponse } from '../types/User';
import { Link } from 'react-router';
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
import { Button } from '@/components/ui/button';

const UserList = memo(() => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [deletingUserId, setDeletingUserId] = useState<number | null>(null);
  const { useGetUsers, createMutation, deleteMutation } = useUser();
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useGetUsers(page, 8);

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
            className: 'bg-primary p-4',
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

  return (
    <div className="flex flex-col gap-4">
      <h2 className="flex justify-between items-center font-extrabold text-center">
        {isLoading ? `${t('loading')}...` : `${t('userList')}: ${data?.count}`}
        <Button
          isLoading={createMutation.isPending || isLoading}
          onClick={handleCreate}
        >
          {t('addUser')}
        </Button>
      </h2>

      <div className="relative min-h-[55vh] overflow-hidden">
        {data?.users?.map((item: User) => (
          <Row
            key={item.id}
            user={item}
            onDelete={handleDelete}
            isLoading={deletingUserId === item.id}
          />
        ))}
      </div>

      {!!data?.count && (
        <CustomPagination data={data} setPage={setPage} page={page} />
      )}
    </div>
  );
});

const CustomPagination = ({
  data,
  page,
  setPage,
}: {
  data: UserResponse;
  page: number;
  setPage: (newPage: number) => void;
}) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          className={data.page === 1 ? 'opacity-50' : 'cursor-pointer'}
        >
          <PaginationPrevious
            onClick={data.page === 1 ? undefined : () => setPage(page - 1)}
          >
            Previous
          </PaginationPrevious>
        </PaginationItem>
        {Array.from({ length: data.totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <PaginationItem
              key={pageNumber}
              className={`cursor-pointer ${
                page === pageNumber
                  ? 'bg-woodsmoke-900 text-white rounded-md'
                  : 'text-white'
              }`}
            >
              <PaginationLink onClick={() => setPage(pageNumber)}>
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem
          className={
            data.page === data.totalPages ? 'opacity-30' : 'cursor-pointer'
          }
        >
          <PaginationNext
            onClick={
              data.page === data.totalPages
                ? undefined
                : () => setPage(data.page + 1)
            }
          >
            Next
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

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
        className="flex hover:bg-dark hover:rounded-lg gap-2 flex-col text-center md:flex-row justify-between items-center md:text-left text-woodsmoke-300 p-8 px-4 h-fit md:h-[50px]"
      >
        <div className="hidden md:block md:w-[20px]">{user.id}</div>
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
          <Link className="button w-full" to={`edit/${user.id}`}>
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
