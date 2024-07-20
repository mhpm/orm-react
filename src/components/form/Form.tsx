import { useEffect } from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { FormField } from '@/types/formField';
import { useTranslation } from 'react-i18next';

interface FormProps<T extends FieldValues> {
  initialData: T;
  formFields: FormField<T>[];
  formController: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  onCancel?: () => void;
}

function Form<T extends FieldValues>({
  initialData,
  formFields,
  formController,
  onSubmit,
  onCancel,
}: FormProps<T>) {
  const { t } = useTranslation();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting},
  } = formController;

  useEffect(() => {
    formFields.forEach((field) => {
      setValue(field.name as Path<T>, initialData[field.name]);
    });
  }, [formFields, initialData, setValue])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl p-7 w-[400px] bg-shark-900"
    >
      <div className="flex flex-col items-center">
        {formFields.map((field) => (
          <div key={field.name as string} className="my-4 flex flex-col">
            {field.label && (
              <label
                htmlFor={field.name as string}
                className="font-semibold my-1"
              >
                {field.label}:
              </label>
            )}
            <input
              className="p-2 px-4 rounded-lg w-[300px]"
              id={field.name as string}
              type={field.type}
              {...register(field.name as Path<T>, {
                required: field.required,
              })}
            />
            {errors[field.name] && (
              <span className="text-red-400">{t('fieldRquired')}</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center p-6">
        <input
          className="text-sm mx-1 px-4 bg-green-500 rounded-lg"
          type="submit"
          value={t('save')}
          disabled={isSubmitting}
        />
        {onCancel && (
          <button onClick={onCancel} className="text-sm text-red-400 mx-1">
            {t('cancel')}
          </button>
        )}
      </div>
    </form>
  );
}

export default Form;
