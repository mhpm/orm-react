import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components';

function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-0 m-0">
      <Navbar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
