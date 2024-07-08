import { useNavigate, useParams } from 'react-router-dom';
import {
  useForm,
} from 'react-hook-form';
import { fetchUser, updateUser } from '@/api/users';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { User } from '@/types/User';
import { FormField } from '@/types/formField';
import Form from '@/components/form/Form';

function EditUserPage() {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const formController = useForm<User>();

  const { data, isLoading } = useQuery<User>({
    queryKey: ['user', id],
    queryFn: () => fetchUser(String(id)),
  });

  const onSubmit = (data: User) => {
    updateMutation.mutate(data);
  };

  const updateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      navigate('/');
    },
  });

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
            {data && (
              <Form<User>
                formController={formController}
                initialData={data}
                formFields={formFields}
                onSubmit={onSubmit}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default EditUserPage;
