import { faker } from '@faker-js/faker';
import { usePosts } from '../hooks/usePosts';
import { Post } from '../types/Post';
import { useTranslation } from 'react-i18next';
import { CgSpinner } from 'react-icons/cg';
import { useCallback, useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { ThumbsUp, Trash } from 'lucide-react';
import { Spinner } from '@/components';

const PostsList = () => {
  const { t } = useTranslation();
  const [deletingPostId, setDeletingPostId] = useState<number>(0);
  const { useGetPosts, createPostMutation, deletePostMutation } = usePosts();
  const { data: posts, isLoading } = useGetPosts();
  const { user } = useCurrentUser();
  const [likes, setLikes] = useState<{ [key: number]: number }>({});

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
          setDeletingPostId(0);
        }, 1000);
      },
    });
  }, []);

  const handleLike = (postId: number) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  if (isLoading)
    return <CgSpinner className="animate-spin h-7 w-7 self-center" />;

  return (
    <div className="p-8 pt-0">
      <div className="mb-5 flex justify-end ">
        <Button onClick={handleCreate}>Create Post</Button>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((item: Post) => (
          <div
            key={item.id}
            className="bg-dark rounded-lg shadow-md overflow-hidden border"
          >
            <div className="relative">
              <div className="flex items-center absolute z-10 top-3 right-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-blue-400"
                  onClick={() => handleLike(item.id!)}
                >
                  <ThumbsUp />
                </Button>
                <span className="text-sm text-gray-400 ml-2">
                  {likes[item.id!] || 0} {t('likes')}
                </span>
                {item.user_email === user?.email && (
                  <Button
                    disabled={deletingPostId === item.id}
                    variant="ghost"
                    size="icon"
                    className="text-red-400 ml-2"
                    onClick={() => handleDelete(item.id!)}
                  >
                    {deletingPostId ? <Spinner /> : <Trash />}
                  </Button>
                )}
              </div>
              <img
                src={`https://picsum.photos/seed/${item.id}/800/600`}
                alt={`${item.user_email}'s avatar`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent rounded-lg" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm mb-4">{item.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.user_email}`}
                    alt={`${item.user_email}'s avatar`}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div className="truncate">
                    <p className="text-sm font-medium truncate">
                      {item.user_email}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(item.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
