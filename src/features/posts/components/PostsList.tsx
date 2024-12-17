import { faker } from '@faker-js/faker';
import { usePosts } from '../hooks/usePosts';
import { Post } from '../types/Post';
import { useTranslation } from 'react-i18next';
import styles from './PostsList.module.css';
import { CgSpinner } from 'react-icons/cg';
import { useCallback, useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Spinner } from '@/components';

const PostsList = () => {
  const { t } = useTranslation();
  const [deletingPostId, setDeletingPostId] = useState<number>(-1);
  const { useGetPosts, createPostMutation, deletePostMutation } = usePosts();
  const { data: posts, isLoading } = useGetPosts();

  const handleCreate = () => {
    createPostMutation.mutate({
      title: `${faker.company.name()}`,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas assumenda architecto et, tempora molestiae molestias eos velit modi maiores laborum quae. Facere vel ducimus quo rem ratione! At, atque ex.',
      created_at: new Date(Date.now()).toISOString(),
    });
  };

  const handleDelete = useCallback((postId: number) => {
    setDeletingPostId(postId);
    deletePostMutation.mutate(postId, {
      onSuccess: () => {
        toast({
          className: 'bg-woodsmoke-950 text-green-400 p-4',
          title: `${t('post')} deleted`,
        });
      },
      onError: () => {
        toast({
          className: 'bg-woodsmoke-950 text-red-400 p-4',
          title: `Error on delete post`,
        });
      },
      onSettled: () => {
        setTimeout(() => {
          setDeletingPostId(-1);
        }, 1000);
      },
    });
  }, []);

  function getSize(size: number) {
    return size > 300 ? 'md:col-span-2' : 'md:col-span-1';
  }

  if (isLoading)
    return <CgSpinner className="animate-spin h-7 w-7 self-center" />;

  return (
    <div>
      <h2 className="flex justify-between items-center font-extrabold text-center p-5">
        {t('newsList')} : {posts?.length}
        <button className="text-sm button" onClick={handleCreate}>
          {createPostMutation.isPending ? (
            <CgSpinner className="animate-spin h-7 w-7 self-center" />
          ) : (
            t('addNew')
          )}
        </button>
      </h2>
      <div
        className={`${styles.list} grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 h-fit`}
      >
        {posts?.map((item: Post) => (
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
                className="text-red-400 text-xs button"
                onClick={() => handleDelete(item.id!)}
                disabled={deletePostMutation.isPending}
              >
                {deletingPostId === item.id ? <Spinner /> : t('delete')}
              </button>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
