import { Outlet, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-0 m-0">
      <nav className="hidden lg:flex p-4 gap-5 w-[250px] h-screen flex-col flex-auto items-center justify-center bg-cyan-800 text-center">
        <Link to="/">Users</Link>
        <Link to="/news">News</Link>
      </nav>
      <nav className="lg:hidden p-4 gap-5 w-full bg-cyan-800 text-left">
        <Link to="/">Users</Link>
        <Link to="/news">News</Link>
      </nav>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

const Link = ({ to, children }: { to: string; children: string }) => (
  <NavLink
    to={to}
    className={({ isActive, isPending }) =>
      `mx-4 text-cyan-400 hover:text-cyan-300 bg-transparent ${
        isPending ? 'pending' : isActive ? 'bg-cyan-700 border-b-2 border-cyan-500' : 'hover:border-b border-cyan-500'
      }`
    }
  >
    {children}
  </NavLink>
);

export default App;
