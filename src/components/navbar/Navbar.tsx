import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { FaUser, FaNewspaper } from 'react-icons/fa';
import {} from 'react-icons/md';
import { MdOutlineMenu, MdMenuOpen } from 'react-icons/md';
import ToggleTheme from '../ToggleTheme';

const NavBar = memo(() => {
  const { t, i18n } = useTranslation();
  const [english, setEnglish] = useState(i18n.language === 'en');
  const [isCollapsed, setIsCollapsed] = useState(true); // State for toggling navbar

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setEnglish(!english);
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${
        isCollapsed
          ? 'w-20'
          : 'w-full fixed z-50 inset-0 sm:w-[300px] sm:min-w-[200px]'
      } transition-all duration-200 p-4 gap-5 sm:relative sm:flex sm:flex-col flex flex-col items-center justify-start bg-cyan-900 text-center`}
    >
      <div className={`w-full ${isCollapsed ? 'text-center' : 'text-right'}`}>
        <button className=" text-white" onClick={toggleNavbar}>
          {isCollapsed ? <MdOutlineMenu size={32} /> : <MdMenuOpen size={32} />}
        </button>
      </div>
      <div className=" lg:top-10 w-full flex flex-col items-center">
        {!isCollapsed && (
          <div className="flex flex-col items-center">
            <img
              src="https://avatar.iran.liara.run/public/boy"
              alt="Profile"
              className="rounded-full w-24 h-24 mb-4"
              loading="lazy"
            />
            <h1 className="text-2xl font-semibold">Michelle Perez</h1>
            <p className="text-sm text-gray-400">I'm Developer</p>
          </div>
        )}
        <nav
          className={`flex flex-col gap-2 font-extrabold ${
            isCollapsed ? 'items-center' : 'items-start mt-8'
          }`}
        >
          <Link
            to="/"
            icon={<FaUser className="h-5 w-5" />}
            collapsed={isCollapsed}
          >
            {t('users')}
          </Link>
          <Link
            to="/news"
            icon={<FaNewspaper className="h-5 w-5" />}
            collapsed={isCollapsed}
          >
            {t('news')}
          </Link>
          <ToggleTheme />
        </nav>
      </div>
      <button
        className={`text-sm button fixed bottom-10 ${
          isCollapsed ? 'text-center' : ''
        }`}
        onClick={() => changeLanguage(english ? 'es' : 'en')}
      >
        {english ? 'ES' : 'EN'}
      </button>
    </div>
  );
});

const Link = memo(
  ({
    to,
    icon,
    children,
    collapsed,
  }: {
    to: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    collapsed: boolean;
  }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center ${
          collapsed ? 'justify-center' : 'justify-start'
        } text-cyan-400 hover:text-cyan-300 hover:bg-cyan-800 px-4 py-2 rounded-md ${
          isActive ? 'bg-cyan-800' : ''
        }`
      }
    >
      {icon}
      {!collapsed && <span className="ml-3">{children}</span>}
    </NavLink>
  )
);

export default NavBar;
