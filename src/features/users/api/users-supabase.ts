import { User } from '../types/User';
import { createClient } from '@/lib/clienFactory';
import { SupabaseClient } from '@supabase/supabase-js';

const supabaseClient = createClient(
  'supabase',
  'https://hihrletflbfnoumdyysy.supabase.co'
) as SupabaseClient;

export const fetchUsers = async (page: number = 1, pageSize: number = 10) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  const { data, error, count } = await supabaseClient
    .from('users')
    .select('*', { count: 'exact' })
    .range(start, end);

  if (error) throw new Error(error.message);

  return {
    data,
    count,
    page,
    pageSize,
    totalPages: count ? Math.ceil(count / pageSize) : 0,
  };
};

export const fetchUserById = async (id: number | string) => {
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
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    })
    .eq('id', user.id)
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const deleteUser = async (id: number | string): Promise<User> => {
  const { data, error } = await supabaseClient
    .from('users')
    .delete()
    .eq('id', id)
    .single();
  if (error) throw new Error(error.message);
  return data;
};
