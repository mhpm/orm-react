import { News } from '../types/News';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL_NEWS as string;

const apiClient = axios.create({
  baseURL: API_URL,
});

export const fetchNews = () =>
  apiClient.get<News[]>('/').then((response) => response.data);

export const fetchNewsById = (id: string) =>
  apiClient.get<News>(`/${id}`).then((response) => response.data);

export const createNews = (news: News) =>
  apiClient.post<News>('/', news).then((response) => response.data);

export const updateNews = (news: News) =>
  apiClient.put<News>(`/${news.id}`, news).then((response) => response.data);

export const deleteNews = (id: string) =>
  apiClient.delete<News>(`/${id}`).then((response) => response.data);
