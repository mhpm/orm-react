import { faker } from '@faker-js/faker';
import { usePosts } from '../hooks/usePosts';
import { useTranslation } from 'react-i18next';
import { CgSpinner } from 'react-icons/cg';
import { useCallback, useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { PostCard } from './PostCard';

const PostsList = () => {
  const { t } = useTranslation();
  const [deletingPostId, setDeletingPostId] = useState<number>(0);
  const { useGetPosts, createPostMutation, deletePostMutation } = usePosts();
  const { data: posts, isLoading } = useGetPosts();
  const { user } = useCurrentUser();
  const [likes, setLikes] = useState<{ [key: number]: number }>({});

  const handleCreate = () => {
    createPostMutation.mutate(
      {
        title: faker.company.name(),
        content: faker.lorem.paragraph(),
        created_at: new Date().toISOString(),
        user_email: user?.email as string,
      },
      {
        onSuccess: () => {
          toast({
            className: 'p-4 bg-white text-green-600 dark:bg-woodsmoke-950 dark:text-green-400',
            title: `${t('posts.post')} created`,
          });
        },
        onError: () => {
          toast({
            className: 'p-4 bg-white text-red-600 dark:bg-woodsmoke-950 dark:text-red-400',
            title: `Error on create post`,
          });
        },
      }
    );
  };

  const handleDelete = useCallback(
    (postId: number) => {
      setDeletingPostId(postId);
      deletePostMutation.mutate(postId, {
        onSuccess: () => {
          toast({
            className: 'p-4 bg-white text-green-600 dark:bg-woodsmoke-950 dark:text-green-400',
            title: `${t('posts.post')} deleted`,
          });
        },
        onError: () => {
          toast({
            className: 'p-4 bg-white text-red-600 dark:bg-woodsmoke-950 dark:text-red-400',
            title: `Error on delete post`,
          });
        },
        onSettled: () => {
          setTimeout(() => setDeletingPostId(0), 1000);
        },
      });
    },
    [deletePostMutation, t]
  );

  const handleLike = useCallback((postId: number) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  }, []);

  if (isLoading) {
    return <CgSpinner className="animate-spin h-7 w-7 self-center" />;
  }

  return (
    <div className="p-8 pt-0">
      <div className="mb-5 flex justify-end">
        <Button isLoading={createPostMutation.isPending} onClick={handleCreate}>
          Create Post
        </Button>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            likes={likes[post.id!] || 0}
            isDeleting={deletingPostId === post.id}
            canDelete={post.user_email === user?.email}
            onLike={handleLike}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
