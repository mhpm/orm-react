import { Outlet, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="flex min-h-screen p-0 m-0">
      <nav className="p-4 gap-5 w-[250px] h-screen flex flex-col flex-auto items-center justify-center bg-cyan-800 text-center">
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
      `p-2 w-full text-cyan-400 hover:text-cyan-300 rounded-lg ${
        isPending ? 'pending' : isActive ? 'bg-cyan-700' : 'hover:bg-cyan-900'
      }`
    }
  >
    {children}
  </NavLink>
);

export default App;
