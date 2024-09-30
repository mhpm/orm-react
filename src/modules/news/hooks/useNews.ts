import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchNews, fetchNewsById, createNews, deleteNews, updateNews } from '@/api/news';
import { News } from '@/modules/news/types/News';

export const useNews = () => {
  const queryClient = useQueryClient();
  const queryKey = 'news'

  const useGetNews = () => useQuery<News[]>({
    queryKey: [queryKey],
    queryFn: () => fetchNews(),
  });

  const useGetNewById = (id:string) => {
    return useQuery<News>({
      queryKey: [queryKey, id],
      queryFn: () => fetchNewsById(String(id)),
    });
  };

  const createNewMutation = useMutation({
    mutationFn: createNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  const deleteNewMutation = useMutation({
    mutationFn: deleteNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  const updateNewMutation = useMutation({
    mutationFn: updateNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  return {
    useGetNews,
    useGetNewById,
    createNewMutation,
    updateNewMutation,
    deleteNewMutation
  }
}