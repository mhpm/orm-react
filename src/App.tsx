import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="h-[100vh] w-[100vw] p-0 m-0">
      <nav className=" bg-black text-center p-2">
        <Link className="p-4" to="/">Users</Link>
        <Link className="p-4" to="/news">News</Link>
      </nav>
      <div className="flex flex-col justify-center items-center w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
