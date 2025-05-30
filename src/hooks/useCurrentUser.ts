import { useState, useEffect } from 'react';
import { getSupabaseClient } from '@/lib/supabaseClient';
import { User } from '@supabase/supabase-js';

export const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
      return;
    }
    const fetchUser = async () => {
      const { data, error } = await getSupabaseClient().auth.getUser();
      if (error) {
        console.error('Error fetching user:', error.message);
      } else {
        setUser(data.user);
      }
      setLoading(false);
    };

    fetchUser();

    const { data: authListener } = getSupabaseClient().auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          setUser(null);
        } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
          setUser(session?.user || null);
        }
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [user]);

  return { user, loading, isAuthenticated: !!user };
};
