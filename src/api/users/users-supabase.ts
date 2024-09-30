
import { User } from '@/modules/users/types/User';
import { supabaseClient } from '@/lib/supabaseClient';

const client = supabaseClient

export const fetchUsers = async () => {
  const { data, error } = await client.from('users').select('*');
  if (error) throw new Error(error.message);
  return data;
};

export const fetchUserById = async (id: number | string) => {
  const { data, error } = await client
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const createUser = async (user: User) => {
  const { data, error } = await client.from('users').insert([user]).single();
  if (error) throw new Error(error.message);
  return data;
};

export const updateUser = async (user: User) => {
  const { data, error } = await client
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

export const deleteUser = async (id: number | string) => {
  const { data, error } = await client
    .from('users')
    .delete()
    .eq('id', id)
    .single();
  if (error) throw new Error(error.message);
  return data;
};
