import { useNavigate, useParams } from 'react-router-dom';
import {
  useForm,
} from 'react-hook-form';
import { User } from '@/types/User';
import { FormField } from '@/types/formField';
import Form from '@/components/form/Form';
import { useUser } from '@/hooks/useUser';

function EditUserPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  const { useGetUserById, updateMutation } = useUser()
  const { data:user, isLoading } = useGetUserById(id as string)

  const formController = useForm<User>();

  const onSubmit = (user: User) => {
    updateMutation.mutate(user);
  };

  const formFields: FormField<User>[] = [
    { name: 'id', label: '', type: 'hidden' },
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
  ];

  return (
    <div className="main h-[100vh] w-[100vw]">
      <div className="flex flex-col items-center justify-center w-full p-[20px]">
        {isLoading ? (
          'Loading...'
        ) : (
          <div className="p-4 rounded-lg">
            <h2 className="text-center mb-3 text-lg">User Info</h2>
            {user && (
              <Form<User>
                formController={formController}
                initialData={user}
                formFields={formFields}
                onSubmit={onSubmit}
                onCancel={() => navigate('/')}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default EditUserPage;
