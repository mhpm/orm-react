import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { faker } from '@faker-js/faker';
import { usePosts } from '../hooks/usePosts';
import { CgSpinner } from 'react-icons/cg';
import { useCallback, useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { PostCard } from './PostCard';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
import { Skeleton } from '@/components/ui/skeleton';
import { usePostsTranslations } from '../hooks/usePostsTranslations';

const PostsList = () => {
  const translations = usePostsTranslations();
  const [deletingPostId, setDeletingPostId] = useState<number>(0);
  const { useGetInfinitePosts, createPostMutation, deletePostMutation } =
    usePosts();
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
  } = useGetInfinitePosts(6);
  const { user } = useCurrentUser();
  const [likes, setLikes] = useState<{ [key: number]: number }>({});

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

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
            className:
              'p-4 bg-white text-green-600 dark:bg-woodsmoke-950 dark:text-green-400',
            title: `${translations.POST} created`,
          });
        },
        onError: () => {
          toast({
            className:
              'p-4 bg-white text-red-600 dark:bg-woodsmoke-950 dark:text-red-400',
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
            className:
              'p-4 bg-white text-green-600 dark:bg-woodsmoke-950 dark:text-green-400',
            title: `${translations.POST} deleted`,
          });
        },
        onError: () => {
          toast({
            className:
              'p-4 bg-white text-red-600 dark:bg-woodsmoke-950 dark:text-red-400',
            title: `Error on delete post`,
          });
        },
        onSettled: () => {
          setTimeout(() => setDeletingPostId(0), 1000);
        },
      });
    },
    [deletePostMutation, translations]
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
      <ScrollToTopButton />
      <div className="mb-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{translations.TITLE}</h1>
        <Button isLoading={createPostMutation.isPending} onClick={handleCreate}>
          {translations.ADD_POST}
        </Button>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {createPostMutation.isPending && (
          <div className="rounded-lg shadow-md overflow-hidden border-4 border-primary bg-white dark:bg-dark p-6 flex flex-col gap-4">
            <Skeleton className="h-6 w-1/2 mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-2" />
            <Skeleton className="h-4 w-2/3 mb-2" />
            <div className="flex gap-2 mt-4">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
        )}
        {data?.pages.flatMap((page) =>
          page.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              likes={likes[post.id!] || 0}
              isDeleting={deletingPostId === post.id}
              canDelete={post.user_email === user?.email}
              onLike={handleLike}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
      <div ref={ref} className="h-10">
        {isFetchingNextPage && (
          <div className="flex justify-center mt-4">
            <CgSpinner className="animate-spin h-7 w-7" />
          </div>
        )}
        {isError && <p className="text-red-500">{translations.IS_ERROR}</p>}

        {!hasNextPage && (
          <div className="text-center text-gray-500 mt-4">
            {translations.NO_MORE_POSTS}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsList;
