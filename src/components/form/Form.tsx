import { useEffect } from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { FormField } from '@/types/formField';

interface FormProps<T extends FieldValues> {
  initialData: T;
  formFields: FormField<T>[];
  formController: UseFormReturn<T>;
  onSubmit: (data: T) => void;
}

function Form<T extends FieldValues>({
  initialData,
  formFields,
  formController,
  onSubmit,
}: FormProps<T>) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = formController;

  useEffect(() => {
    formFields.forEach((field) => {
      setValue(field.name as Path<T>, initialData[field.name]);
    });
  }, [initialData, formFields, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register(field.name as Path<T>)}
          />
          {errors[field.name] && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>
      ))}
      <button className='text-sm' type="submit">Submit</button>
    </form>
  );
}

export default Form;
