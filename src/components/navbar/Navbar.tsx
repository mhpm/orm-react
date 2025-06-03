import { memo } from 'react';
import { ToggleLanguage, ToggleTheme } from '@/components';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { signOut } from '@/features/auth/services/auth-supabase';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useMenuTrigger } from '../side-menu/useMenuTrigger';
import { MdMenuOpen, MdOutlineMenu } from 'react-icons/md';

const NavBar = memo(() => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useCurrentUser();
  const { isOpen, toggleMenu } = useMenuTrigger();

  return (
    <header className="p-4 bg-gray-900 border-b border-gray-700 text-white">
      <div className="flex justify-between gap-2 items-center pr-4">
        <div>
          <button
            className="text-white flex sm:hidden"
            onClick={toggleMenu}
            aria-label={
              isOpen ? 'Open navigation menu' : 'Close navigation menu'
            }
          >
            {isOpen ? <MdOutlineMenu size={32} /> : <MdMenuOpen size={32} />}
          </button>
        </div>
        <div className="flex gap-2 items-center">
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
      </div>
    </header>
  );
});

export default NavBar;
