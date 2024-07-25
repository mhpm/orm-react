import { News } from '../types/News';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL_NEWS as string;

const apiClient = axios.create({
  baseURL: API_URL,
});

export const fetchNews = async () => {
  const { data } = await apiClient.get<News[]>('/');
  return data;
};

export const fetchNewsById = async (id: string): Promise<News> => {
  const { data } = await apiClient.get<News>(`/${id}`);
  return data;
};

export const createNews = async (news: News) => {
  const { data } = await apiClient.post<News>('/', news);
  return data;
};

export const updateNews = async (news: News) => {
  const { data } = await apiClient.put<News>(`/${news.id}`, news);
  return data;
};

export const deleteNews = async (id: string) => {
  const { data } = await apiClient.delete<News>(`/${id}`);
  return data;
};
