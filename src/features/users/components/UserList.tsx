import { memo, useCallback, useState } from 'react';
import { User } from '../types/User';
import { faker } from '@faker-js/faker';
import { useUser } from '../hooks/useUser';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import CustomPagination from './CustomPagination';
import UserRow from './UserRow';

const UserList = memo(() => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [deletingUserId, setDeletingUserId] = useState<number | null>(null);
  const { useGetUsers, createMutation, deleteMutation } = useUser();
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useGetUsers(page, 8);

  if (isError) {
    throw new Error(error?.message || 'Unknown error');
  }

  const showSuccessToast = useCallback(
    (message: string) => {
      toast({
        className: 'bg-woodsmoke-950 text-green-400 p-4',
        title: message,
      });
    },
    [toast]
  );

  const showErrorToast = useCallback(
    (message: string) => {
      toast({
        className: 'bg-woodsmoke-950 text-red-400 p-4',
        title: message,
      });
    },
    [toast]
  );

  const handleCreate = useCallback(() => {
    createMutation.mutate(
      {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password({ length: 12 }),
        role: 'user',
        avatar: faker.image.avatarGitHub(),
      },
      {
        onSuccess: () => showSuccessToast(`${t('users.user')} created successfully`),
        onError: () => showErrorToast('Error on create user'),
      }
    );
  }, [createMutation, showSuccessToast, showErrorToast, t]);

  const handleDelete = useCallback(
    (userId: number) => {
      setDeletingUserId(userId);
      deleteMutation.mutate(userId, {
        onSuccess: () => showSuccessToast(`${t('user')} deleted`),
        onError: () => showErrorToast('Error on delete user'),
        onSettled: () => setDeletingUserId(null),
      });
    },
    [deleteMutation, showSuccessToast, showErrorToast, t]
  );

  return (
    <div className="flex flex-col gap-4">
      <h2
        className="flex justify-between items-center font-extrabold text-center"
        role="status"
        aria-live="polite"
      >
        {isLoading
          ? `${t('common.loading')}...`
          : `${t('users.userList')}: ${data?.count ?? 0}`}
        <Button
          isLoading={createMutation.isPending || isLoading}
          onClick={handleCreate}
          aria-label={t('users.addUser')}
          disabled={createMutation.isPending || isLoading}
        >
          {t('users.addUser')}
        </Button>
      </h2>

      <div
        className="relative min-h-[55vh] overflow-hidden"
        role="region"
        aria-label={t('users.userList')}
      >
        {isLoading ? (
          <div
            className="text-center text-muted mt-8"
            role="status"
            aria-live="polite"
          >
            {t('loading')}...
          </div>
        ) : (data?.users ?? []).length > 0 ? (
          (data?.users ?? []).map((item: User) => (
            <UserRow
              key={item.id}
              user={item}
              onDelete={handleDelete}
              isLoading={deletingUserId === item.id}
            />
          ))
        ) : (
          <p
            className="text-center text-muted mt-8"
            role="status"
            aria-live="polite"
          >
            {t('noUsersFound')}
          </p>
        )}
      </div>

      {!!data?.count && (
        <CustomPagination data={data} setPage={setPage} page={page} />
      )}
    </div>
  );
});

UserList.displayName = 'UserList';

export default UserList;
