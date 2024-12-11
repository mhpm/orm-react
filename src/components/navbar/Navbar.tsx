import { memo } from 'react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/clerk-react';
import { ToggleLanguage, ToggleTheme } from '@/components';

const NavBar = memo(() => {
  const { isSignedIn, user } = useUser();

  return (
    <header className="p-2 bg-gray-900 border-b border-gray-700">
      <div className="flex justify-end gap-2 items-center">
        <ToggleTheme />
        <ToggleLanguage />
        {isSignedIn && user.fullName}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
});

export default NavBar;
