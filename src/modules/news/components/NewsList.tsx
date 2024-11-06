import { faker } from '@faker-js/faker';
import { useNews } from '@/modules/news/hooks/useNews';
import { News } from '@/modules/news/types/News';
import { useTranslation } from 'react-i18next';
import styles from './NewsList.module.css';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

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

  function getSize(size: number) {
    return size > 300 ? 'md:col-span-2' : 'md:col-span-1';
  }

  if (isLoading)
    return <ArrowPathIcon className="animate-spin h-7 w-7 self-center" />;

  return (
    <div>
      <h2 className="flex justify-between items-center font-extrabold text-center p-5">
        {t('newsList')} : {news?.length}
        <button className="text-sm button" onClick={handleCreate}>
          {createNewMutation.isPending ? (
            <ArrowPathIcon className="animate-spin h-7 w-7 self-center" />
          ) : (
            t('addNew')
          )}
        </button>
      </h2>
      <div
        className={`${styles.list} grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 h-fit`}
      >
        {news?.map((item: News) => (
          <figure
            key={item.id}
            className={`p-6 bg-woodsmoke-900 rounded dark:bg-gray-800 h-full flex flex-col justify-between col-span-full row-span-2  ${getSize(
              item.content.length
            )}`}
          >
            <blockquote className="text-sm text-gray-200 dark:text-white/90">
              <h3 className="text-2xl font-semibold leading-tight text-cyan-500 dark:text-white text-balance">
                {item.title}
              </h3>
              <p className="my-4">{item.content}</p>
            </blockquote>
            <div className="text-right">
              <button
                onClick={() => deleteNewMutation.mutate(item.id as string)}
                className="text-red-400 text-xs button"
              >
                {t('delete')}
              </button>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
