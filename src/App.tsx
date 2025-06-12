import { Outlet } from 'react-router';
import { Toaster } from '@/components/ui/toaster';
import { Navbar, SideMenu, Modal } from '@/components';

function App() {
  return (
    <div className="flex lg:flex-row min-h-screen p-0 m-0">
      <SideMenu />
      <div className="w-full flex flex-col">
        <Navbar />
        <Outlet />
      </div>
      <Toaster />
      <Modal />
    </div>
  );
}

export default App;
