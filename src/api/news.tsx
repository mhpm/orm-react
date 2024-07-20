import { News } from '../types/News';

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL_NEWS as string;

export const fetchNews = async () => {
  const response = await axios.get<News[]>(API_URL);
  return response.data;
};

export const fetchNewsById = async (id: string): Promise<News> => {
  const response = await axios.get<News>(`${API_URL}/${id}`);
  return response.data;
};

export const createNews = async (news: News) =>
  (await axios.post(API_URL, news)).data;

export const updateNews = async (news: News) => {
  const response = await axios.put(`${API_URL}/${news.id}`, news);
  return response.data;
};

export const deleteNews = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
