import { Post } from '../types/Post';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL_NEWS as string;

const apiClient = axios.create({
  baseURL: API_URL,
});

export const fetchPosts = () =>
  apiClient.get<Post[]>('/').then((response) => response.data);

export const fetchPostById = (id: string) =>
  apiClient.get<Post>(`/${id}`).then((response) => response.data);

export const createPost = (post: Post) =>
  apiClient.post<Post>('/', post).then((response) => response.data);

export const updatePost = (post: Post) =>
  apiClient.put<Post>(`/${post.id}`, post).then((response) => response.data);

export const deletePost = (id: string) =>
  apiClient.delete<Post>(`/${id}`).then((response) => response.data);
