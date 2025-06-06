import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
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
    useGetPostById,
    createPostMutation,
    updatePostMutation,
    deletePostMutation,
  };
};
