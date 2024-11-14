import { createClient } from '@supabase/supabase-js';

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const createSupabaseClient = (baseURL: string) => {
  return createClient(baseURL, supabaseKey);
};
