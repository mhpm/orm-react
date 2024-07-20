import { NavLink } from "react-router-dom";

const NavBar = () => (
  <>
    <nav className="hidden lg:flex p-4 gap-5 w-[150px] h-screen flex-col flex-auto items-center justify-center bg-cyan-800 text-center">
      <Link to="/">Users</Link>
      <Link to="/news">News</Link>
    </nav>
    <nav className="lg:hidden p-4 gap-5 w-full bg-cyan-800 text-left">
      <Link to="/">Users</Link>
      <Link to="/news">News</Link>
    </nav>
  </>
);

const Link = ({ to, children }: { to: string; children: string }) => (
  <NavLink
    to={to}
    className={({ isActive, isPending }) =>
      `mx-4 text-cyan-400 hover:text-cyan-300 bg-transparent ${
        isPending
          ? 'pending'
          : isActive
          ? 'bg-cyan-700 border-b-2 border-cyan-500'
          : 'hover:border-b border-cyan-500'
      }`
    }
  >
    {children}
  </NavLink>
);

export default NavBar;