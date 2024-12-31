// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

let supabaseInstance: ReturnType<typeof createClient> | null = null;

export const getSupabaseClient = () => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseKey, {
      global: {
        fetch: async (url, options = {}) => {
          // const token = await session?.getToken({ template: 'supabase' });
          const headers = new Headers(options.headers);
          headers.set('apikey', supabaseKey);
          // if (token) {
          //   headers.set('Authorization', `Bearer ${token}`);
          // }
          return fetch(url, { ...options, headers });
        },
      },
    });
  }

  return supabaseInstance;
};
