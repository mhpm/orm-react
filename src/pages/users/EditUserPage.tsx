import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { User } from '@/types/User';
import { useUser } from '@/hooks/useUser';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast"


function EditUserPage() {
  const { toast } = useToast()
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
    updateMutation.mutate(user);
    toast({
      className: 'bg-woodsmoke-950 text-green-500 p-4',
      title: `${t('user')} ${t('updated')}`,
    })
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
          <h2 className="text-center font-bold text-lg">{t('userInfo')}</h2>
          {user && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-xl p-7 w-[400px]"
            >
              <div className="flex flex-col items-center">
                <div className="my-4 flex flex-col">
                  <label htmlFor="name" className="font-semibold my-1">
                    {t('name')}:
                  </label>
                  <input
                    className="p-3 px-4 rounded-lg w-[300px]"
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
                  disabled={isSubmitting}
                >
                  {t('save')}
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
      )}
    </div>
  );
}

export default EditUserPage;
