import { ThemeProvider } from '@/components/theme-provider';
import { Outlet } from 'react-router';
import { SideMenu, ToggleLanguage, ToggleTheme } from '@/components';
import { Toaster } from '@/components/ui/toaster';
import AuthAvatarMenu from '@/features/auth/components/AuthAvatarMenu';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex lg:flex-row min-h-screen p-0 m-0">
        <SideMenu />
        <div className="w-full">
          <header className="p-2 bg-gray-900 border-b border-gray-700">
            <div className="flex justify-end gap-2">
              <ToggleTheme />
              <ToggleLanguage />
              <AuthAvatarMenu />
            </div>
          </header>
          <Outlet />
        </div>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
