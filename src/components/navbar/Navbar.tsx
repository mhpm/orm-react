import { memo } from 'react';
import { ToggleLanguage, ToggleTheme } from '@/components';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { signOut } from '@/features/auth/services/auth-supabase';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';

const NavBar = memo(() => {
  let navigate = useNavigate();
  const { isAuthenticated, user } = useCurrentUser();

  return (
    <header className="p-4 bg-gray-900 border-b border-gray-700 text-white">
      <div className="flex justify-end gap-2 items-center pr-4">
        <ToggleTheme />
        <ToggleLanguage />
        {isAuthenticated ? (
          <>
            <span>{user?.email}</span>
            <Button onClick={signOut} variant="outline" size="icon">
              <LogOut />
            </Button>
          </>
        ) : (
          <Button onClick={() => navigate('/auth')} variant="ghost">
            Login
          </Button>
        )}
      </div>
    </header>
  );
});

export default NavBar;
