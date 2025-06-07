import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CgSpinner } from 'react-icons/cg';
import { useUser } from '../hooks/useUser';
import { User } from '../types/User';
import { useToast } from '@/components/ui/use-toast';
import UserFormFields from './UserFormFields';
import { useModalStore } from '@/components/modal/useModalStore';

interface EditUserModalProps {
  user: User;
}

function EditUserModal({ user }: EditUserModalProps) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { updateMutation } = useUser();
  const closeModal = useModalStore((state) => state.closeModal);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  useEffect(() => {
    if (user) {
      setValue('id', user.id);
      setValue('first_name', user.first_name);
      setValue('last_name', user.last_name);
      setValue('email', user.email);
      setValue('avatar', user.avatar);
    }
  }, [user, setValue]);

  const onSubmit = (data: User) => {
    updateMutation.mutate(data, {
      onSuccess: () => {
        toast({
          className: 'p-4 bg-white text-green-600 dark:bg-woodsmoke-950 dark:text-green-500',
          title: `${t('users.user')} ${t('users.updated')}`,
        });
        closeModal();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-xl p-7 w-full">
      <UserFormFields register={register} errors={errors} t={t} />
      <div className="flex justify-center p-6">
        <button
          className="button text-sm text-green-400 mx-2"
          type="submit"
          disabled={updateMutation.isPending}
        >
          {updateMutation.isPending ? (
            <CgSpinner className="animate-spin h-4 w-4" />
          ) : (
            t('users.save')
          )}
        </button>
      </div>
    </form>
  );
}

export default EditUserModal;
