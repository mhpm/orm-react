import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { User } from '../types/User';
import type { TFunction } from 'i18next';

type UserFormFieldsProps = {
  register: UseFormRegister<User>;
  errors: FieldErrors<User>;
  t: TFunction;
};

export default function UserFormFields({
  register,
  errors,
  t,
}: UserFormFieldsProps) {
  return (
    <>
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
            <span className="text-red-400 p-1">{t('fieldRequired')}</span>
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
            <span className="text-red-400 p-1">{t('fieldRequired')}</span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="my-4 flex flex-col">
          <label htmlFor="email" className="font-semibold my-1">
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
            <span className="text-red-400 p-1">{t('fieldRequired')}</span>
          )}
        </div>
      </div>
    </>
  );
}
