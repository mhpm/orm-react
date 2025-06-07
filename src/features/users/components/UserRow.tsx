import { memo, useCallback } from 'react';
import { User } from '../types/User';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { CgSpinner } from 'react-icons/cg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useModal } from '@/components/modal/useModal';
import EditUserModal from './EditUserModal';
import { useTranslation } from 'react-i18next';

type UserRowProps = {
  user: User;
  isLoading: boolean;
  onDelete: (id: number) => void;
};

const UserRow = memo(({ user, isLoading, onDelete }: UserRowProps) => {
  const { openModal } = useModal();
  const { t } = useTranslation();

  const handleDelete = useCallback(() => {
    onDelete(user.id as number);
  }, [onDelete, user.id]);

  const handleEdit = useCallback(() => {
    openModal(t('users.userInfo'), <EditUserModal user={user} />);
  }, [openModal, user, t]);

  return (
    <div className="flex gap-2 flex-col text-center md:flex-row justify-between items-center md:text-left text-gray-800 dark:text-woodsmoke-300 h-fit md:h-[50px] hover:bg-gray-200 dark:hover:bg-dark hover:rounded-lg">
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
        <button className="button w-full" onClick={handleEdit}>
          <FaEdit className="h-5 w-5" />
        </button>
        <button
          onClick={handleDelete}
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
});

UserRow.displayName = 'UserRow';

export default UserRow;
