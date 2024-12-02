import { ThemeProvider } from '@/components/theme-provider';
import { Outlet } from 'react-router';
import { SideMenu } from '@/components';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex lg:flex-row min-h-screen p-0 m-0">
        <SideMenu />
        <div className="w-full">
          <Outlet />
        </div>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
