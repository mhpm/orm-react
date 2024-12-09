import { createClient } from '@/lib/clienFactory';
import { SupabaseClient } from '@supabase/supabase-js';

const supabaseClient = createClient(
  'supabase',
  'https://hihrletflbfnoumdyysy.supabase.co'
) as SupabaseClient;

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabaseClient.auth.signUp({ email, password });

  if (error) {
    console.error('Error signing up:', error.message);
    return { error };
  }
  return { user: data.user };
};

export const signInWithPassword = async (email: string, password: string) => {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Error logging in with email/password:', error.message);
    return { error };
  }
  return { user: data.user };
};

export const signInWithGithub = async () => {
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'github',
  });

  if (error) {
    console.error('Error signing up with github:', error.message);
    return { error };
  }
  return { user: data };
};

export const signOut = async () => {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    console.error('Error signing out:', error.message);
    return { error };
  }
  console.log('User signed out successfully');
};
