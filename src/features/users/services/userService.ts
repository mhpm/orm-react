import { getSupabaseClient } from '@/lib/supabaseClient';
import { User, UserResponse } from '../types/User';
import { SupabaseClient } from '@supabase/supabase-js';

const supabaseClient: SupabaseClient = getSupabaseClient();

export const getUsers = async (
  page: number = 1,
  pageSize: number = 10
): Promise<UserResponse> => {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error, count } = await supabaseClient
    .from('users')
    .select('*', { count: 'exact' })
    .order('id', { ascending: false })
    .range(from, to);

  if (error) throw new Error(error.message);

  return {
    count,
    page,
    pageSize,
    totalPages: count ? Math.ceil(count / pageSize) : 0,
    users: data,
  };
};

export const getUserById = async (id: number | string) => {
  const { data, error } = await supabaseClient
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const createUser = async (user: User): Promise<User> => {
  const { data, error } = await supabaseClient
    .from('users')
    .insert([user])
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const updateUser = async (user: User) => {
  const { data, error } = await supabaseClient
    .from('users')
    .update({
      ...user,
    })
    .eq('id', user.id)
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const deleteUser = async (id: number): Promise<User> => {
  const { data, error } = await supabaseClient
    .from('users')
    .delete()
    .eq('id', id)
    .single();

  if (error) throw new Error(error.message);

  return data;
};
