import { getSupabaseClient } from '@/lib/supabaseClient';
import { Post } from '../types/Post';
import { SupabaseClient } from '@supabase/supabase-js';

const supabaseClient: SupabaseClient = getSupabaseClient();

export const getPots = async () => {
  const { data, error } = await supabaseClient
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  return data;
};

export const getPostById = async (id: number | string) => {
  const { data, error } = await supabaseClient
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const createPost = async (post: Post): Promise<Post> => {
  const { data, error } = await supabaseClient
    .from('posts')
    .insert([post])
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const updatePost = async (post: Post) => {
  const { data, error } = await supabaseClient
    .from('posts')
    .update({
      title: post.title,
      content: post.content,
      created_at: post.created_at,
    })
    .eq('id', post.id)
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const deletePost = async (id: number): Promise<Post> => {
  const { data, error } = await supabaseClient
    .from('posts')
    .delete()
    .eq('id', id)
    .single();

  if (error) throw new Error(error.message);

  return data;
};
