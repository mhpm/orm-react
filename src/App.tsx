import { ThemeProvider } from '@/components/theme-provider';
import { Outlet } from 'react-router';
import { Toaster } from '@/components/ui/toaster';
import { Navbar, SideMenu } from '@/components';
import { useSession, useUser } from '@clerk/clerk-react';
import { getSupabaseClient } from './lib/supabaseClient';
import { useEffect } from 'react';

const syncUserToSupabase = async () => {
  const { session } = useSession();
  const { user } = useUser();

  const supabase = getSupabaseClient(session);

  try {
    const { data, error } = await supabase.from('users').upsert({
      id: user?.id,
      email: user?.emailAddresses[0]?.emailAddress,
      name: user?.fullName,
    });

    if (error) {
      console.error('Error syncing user to Supabase:', error.message);
    } else {
      console.log('User synced to Supabase:', data);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
};

function App() {
  const { session } = useSession();

  useEffect(() => {
    if (session) {
      getSupabaseClient(session);
      // syncUserToS upabase();
    }
  }, [session]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex lg:flex-row min-h-screen p-0 m-0">
        <SideMenu />
        <div className="w-full">
          <Navbar />
          <Outlet />
        </div>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
