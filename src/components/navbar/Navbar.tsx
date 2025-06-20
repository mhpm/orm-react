import { memo } from 'react';
import { ToggleLanguage, ToggleTheme } from '@/components';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useModal } from '../modal/useModal';
import ConfirmLogoutModal from '@/features/auth/components/ConfirmLogoutModal';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useMenuTrigger } from '../side-menu/useMenuTrigger';
import { MdMenuOpen, MdOutlineMenu } from 'react-icons/md';

const NavBar = memo(() => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useCurrentUser();
  const { isOpen, toggleMenu } = useMenuTrigger();
  const { openModal } = useModal();

  return (
    <header className="p-4 border-b bg-gray-100 text-gray-900 border-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-700">
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
              <Button
                onClick={() =>
                  openModal('Confirm Logout', <ConfirmLogoutModal />)
                }
                variant="outline"
                size="icon"
              >
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
