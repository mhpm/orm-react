import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { User } from '@/types/User';
import { useUser } from '@/hooks/useUser';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function EditUserPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { useGetUserById, updateMutation } = useUser();
  const { data: user, isLoading } = useGetUserById(id as string);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<User>();

  const onSubmit = (user: User) => {
    console.log(user);
    updateMutation.mutate(user);
  };

  useEffect(() => {
    if (user) {
      setValue('id', user.id);
      setValue('name', user.name);
      setValue('email', user.email);
    }
  }, [user, setValue]);

  return (
    <div className="flex justify-center w-full p-[20px]">
      {isLoading ? (
        `${t('loading')}...`
      ) : (
        <div className="p-4 rounded-lg">
          <h2 className="text-center mb-3 text-lg">{t('userInfo')}</h2>
          {user && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-xl p-7 w-[400px] bg-shark-900"
            >
              <div className="flex flex-col items-center">
                <div className="my-4 flex flex-col">
                  <label htmlFor="name" className="font-semibold my-1">
                    {t('name')}:
                  </label>
                  <input
                    className="p-2 px-4 rounded-lg w-[300px]"
                    id="name"
                    type="text"
                    {...register('name', {
                      required: true,
                    })}
                  />
                  {errors.name && (
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
                    className="p-2 px-4 rounded-lg w-[300px]"
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
                  className="text-sm mx-1 px-4 text-green-400 rounded-lg bg-woodsmoke-950"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {t('save')}
                </button>

                <button
                  onClick={() => navigate('/')}
                  className="text-sm text-red-400 mx-1"
                >
                  {t('cancel')}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default EditUserPage;
