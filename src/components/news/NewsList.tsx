import { Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import { useNews } from '@/hooks/useNews';
import { News } from '@/types/News';

const UserList = () => {
  const { useGetNews, createNewMutation, deleteNewMutation } = useNews();
  const { data: news, isLoading } = useGetNews();

  const handleCreate = () => {
    createNewMutation.mutate({
      id: faker.string.alphanumeric(4),
      title: `News Title: ${faker.string.alphanumeric(4)}`,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas assumenda architecto et, tempora molestiae molestias eos velit modi maiores laborum quae. Facere vel ducimus quo rem ratione! At, atque ex.',
    });
  };
  return (
    <div>
      <h2 className="flex justify-between items-center font-extrabold text-center p-5">
        {isLoading ? 'Loading...' : `User List: ${news?.length}`}
        <button className="text-sm" onClick={handleCreate}>
          {createNewMutation.isPending ? 'Loading...' : 'Add News'}
        </button>
      </h2>
      <div className="rounded-lg flex flex-wrap">
        {news?.map((item: News) => (
          <div key={item.id} className='sm:w-full md:w-1/2 lg:w-1/3 p-2'>
            <div
              className="flex flex-col justify-between text-left border rounded-xl border-gray-600 p-2 px-4 mb-3 h-[300px]"
            >
              <div className="w-full font-bold text-xl py-2 text-cyan-500">{item.title}</div>
              <div className=" font-semibold">{item.content}</div>
              <div className='text-right p-4'>
              <Link
                to={`news/edit/${item.id}`}
                className="text-green-600 text-xs p-2"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteNewMutation.mutate(item.id as string)}
                className="text-red-400 text-xs p-2"
              >
                Delete
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
