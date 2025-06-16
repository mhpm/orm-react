import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getPostsPaginated,
} from '@/features/posts/services/posts-supabase';
import { Post } from '../types/Post';

export const usePosts = () => {
  const queryClient = useQueryClient();
  const queryKey = 'posts';

  const useGetPosts = () =>
    useQuery<Post[]>({
      queryKey: [queryKey],
      queryFn: () => getPosts(),
    });

  const useGetInfinitePosts = (pageSize: number = 10) => {
    return useInfiniteQuery<Post[]>({
      queryKey: [queryKey, 'infinite'],
      initialPageParam: 1,
      queryFn: ({ pageParam = 1 }) =>
        getPostsPaginated(pageParam as number, pageSize),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === pageSize ? allPages.length + 1 : undefined;
      },
    });
  };

  const useGetPostById = (id: number) => {
    return useQuery<Post>({
      queryKey: [queryKey, id],
      queryFn: () => getPostById(id),
    });
  };

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  return {
    useGetPosts,
    useGetInfinitePosts,
    useGetPostById,
    createPostMutation,
    updatePostMutation,
    deletePostMutation,
  };
};
