import { createClient } from '@supabase/supabase-js';

export const createSupabaseClient = (baseURL: string) => {
  return createClient(baseURL, localStorage.getItem('supabase_key') || '');
};
