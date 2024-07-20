import { faker } from '@faker-js/faker';
import { useNews } from '@/hooks/useNews';
import { News } from '@/types/News';
import { useTranslation } from 'react-i18next';

const NewsList = () => {
  const { t } = useTranslation();
  const { useGetNews, createNewMutation, deleteNewMutation } = useNews();
  const { data: news, isLoading } = useGetNews();

  const handleCreate = () => {
    createNewMutation.mutate({
      id: faker.string.alphanumeric(4),
      title: `${faker.company.name()}`,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas assumenda architecto et, tempora molestiae molestias eos velit modi maiores laborum quae. Facere vel ducimus quo rem ratione! At, atque ex.',
    });
  };
  return (
    <div>
      <h2 className="flex justify-between items-center font-extrabold text-center p-5">
        {isLoading ? t('loading') : `${t('newsList')}: ${news?.length}`}
        <button className="text-sm button" onClick={handleCreate}>
          {createNewMutation.isPending ? t('loading') : t('addNew')}
        </button>
      </h2>
      <div className="rounded-lg flex flex-wrap">
        {news?.map((item: News) => (
          <div key={item.id} className="sm:w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="flex flex-col justify-between text-left border rounded-xl hover:scale-[1.03] border-cyan-900 shadow-lg hover:shadow-cyan-800/50  p-2 px-4 mb-3 h-[300px] transition ease-in-out duration-500">
              <div className="w-full font-bold text-xl py-2 text-cyan-500">
                {item.title}
              </div>
              <div className=" font-semibold">{item.content}</div>
              <div className="text-right p-4">
                <button
                  onClick={() => deleteNewMutation.mutate(item.id as string)}
                  className="text-red-400 text-xs button"
                >
                  {t('delete')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
