import { faker } from '@faker-js/faker';
import { usePosts } from '../hooks/usePosts';
import { Post } from '../types/Post';
import { useTranslation } from 'react-i18next';
import styles from './PostsList.module.css';
import { CgSpinner } from 'react-icons/cg';
import { useCallback, useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Spinner } from '@/components';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { CircleX } from 'lucide-react';

const PostsList = () => {
  const { t } = useTranslation();
  const [deletingPostId, setDeletingPostId] = useState<number>(-1);
  const { useGetPosts, createPostMutation, deletePostMutation } = usePosts();
  const { data: posts, isLoading } = useGetPosts();
  const { user } = useCurrentUser();

  const handleCreate = () => {
    createPostMutation.mutate({
      title: `${faker.company.name()}`,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas assumenda architecto et, tempora molestiae molestias eos velit modi maiores laborum quae. Facere vel ducimus quo rem ratione! At, atque ex.',
      created_at: new Date(Date.now()).toISOString(),
      user_email: user?.email as string,
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
        <Button className="text-sm button" onClick={handleCreate}>
          {createPostMutation.isPending ? (
            <CgSpinner className="animate-spin h-7 w-7 self-center" />
          ) : (
            t('addNew')
          )}
        </Button>
      </h2>
      <div
        className={`${styles.list} grid gap-8 grid-flow-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 h-fit`}
      >
        {posts?.map((item: Post) => (
          <figure
            key={item.id}
            className={`relative p-6 rounded-lg border border-slate-500 bg-gray-900 flex flex-col justify-between col-span-full row-span-2  ${getSize(
              item.content.length
            )}`}
          >
            <blockquote className="text-sm text-gray-200 dark:text-white/90">
              <h3 className="text-2xl font-semibold leading-tight text-cyan-500 dark:text-white text-balance pr-10">
                {item.title}
              </h3>
              <p className="my-4">{item.content}</p>
              <footer className="text-xs text-gray-400">
                {t('by')} {item.user_email} -{' '}
                {new Date(item.created_at).toLocaleDateString()}
              </footer>
            </blockquote>
            {item.user_email === user?.email && (
              <div className="absolute top-4 right-4 rounded-full">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-400"
                  onClick={() => handleDelete(item.id!)}
                  disabled={deletePostMutation.isPending}
                >
                  {deletingPostId === item.id ? <Spinner /> : <CircleX />}
                </Button>
              </div>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
