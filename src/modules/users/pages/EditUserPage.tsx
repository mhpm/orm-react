import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { User } from '@/modules/users/types/User';
import { useUser } from '@/modules/users/hooks/useUser';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

function EditUserPage() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { useGetUserById, updateMutation } = useUser();
  const { data: user, isLoading } = useGetUserById(id as string);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = (user: User) => {
    updateMutation.mutate(user);
    toast({
      className: 'bg-woodsmoke-950 text-green-500 p-4',
      title: `${t('user')} ${t('updated')}`,
    });
  };

  useEffect(() => {
    if (user) {
      setValue('id', user.id);
      setValue('first_name', user.first_name);
      setValue('last_name', user.last_name);
      setValue('email', user.email);
      setValue('avatar', user.avatar);
    }
  }, [user, setValue]);

  if (isLoading)
    return (
      <div className="w-full flex justify-center p-10">
        <ArrowPathIcon className="animate-spin h-7 w-7" />
      </div>
    );

  return (
    <div className="flex justify-center h-screen w-full p-[20px]">
      <div className="p-4 rounded-lg">
        <h2 className="text-center font-bold text-lg">{t('userInfo')}</h2>
        {user && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-xl p-7 w-[400px]"
          >
            <div className="flex flex-col items-center">
              <div className="my-4 flex flex-col">
                <label htmlFor="first_name" className="font-semibold my-1">
                  {t('first_name')}:
                </label>
                <input
                  className="p-3 px-4 rounded-lg w-[300px]"
                  id="first_name"
                  type="text"
                  {...register('first_name', {
                    required: true,
                  })}
                />
                {errors.first_name && (
                  <span className="text-red-400 p-1">{t('fieldRquired')}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="my-4 flex flex-col">
                <label htmlFor="last_name" className="font-semibold my-1">
                  {t('last_name')}:
                </label>
                <input
                  className="p-3 px-4 rounded-lg w-[300px]"
                  id="last_name"
                  type="text"
                  {...register('last_name', {
                    required: true,
                  })}
                />
                {errors.last_name && (
                  <span className="text-red-400 p-1">{t('fieldRquired')}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="my-4 flex flex-col">
                <label htmlFor="name" className="font-semibold my-1">
                  {t('email')}:
                </label>
                <input
                  className="p-3 px-4 rounded-lg w-[300px]"
                  id="email"
                  type="email"
                  {...register('email', {
                    required: true,
                  })}
                />
                {errors.email && (
                  <span className="text-red-400 p-1">{t('fieldRquired')}</span>
                )}
              </div>
            </div>
            <div className="flex justify-center p-6">
              <button
                className="button text-sm text-green-400 mx-2"
                type="submit"
                disabled={updateMutation.isPending}
              >
                {updateMutation.isPending ? (
                  <ArrowPathIcon className="animate-spin h-4 w-4" />
                ) : (
                  t('save')
                )}
              </button>

              <button
                onClick={() => navigate('/')}
                className="button text-sm text-red-400 mx-2"
              >
                {t('back')}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EditUserPage;
