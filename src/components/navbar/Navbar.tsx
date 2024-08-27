import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { NewspaperIcon, UserIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [english, setEnglish] = useState(i18n.language === 'en' ? true : false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setEnglish(!english);
  };

  return (
    <div className="fixed inset-0 z-50 w-full p-4 gap-5 lg:relative lg:flex lg:w-[300px] flex-col items-center justify-start bg-cyan-900 text-center">
      <div className="lg:fixed lg:top-10">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/100" // Reemplaza con la URL de tu imagen
            alt="Profile"
            className="rounded-full w-24 h-24 mb-4"
          />
          <h1 className="text-2xl font-semibold">Michelle Perez</h1>
          <p className="text-sm text-gray-400">I'm Developer</p>
        </div>
        <nav className="flex flex-col gap-2 mt-8 font-extrabold">
          <Link to="/">
            <UserIcon className="h-5 w-5 mr-3" />
            {t('users')}
          </Link>
          <Link to="/news">
            <NewspaperIcon className="h-5 w-5 mr-3" />
            {t('news')}
          </Link>
        </nav>
      </div>
      <button
        className="text-sm button fixed bottom-10"
        onClick={() => changeLanguage(english ? 'es' : 'en')}
      >
        {english ? 'ES' : 'EN'}
      </button>
    </div>
  );
};

const Link = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex justify-start text-cyan-400 hover:text-cyan-300 hover:bg-cyan-800 px-4 py-2 rounded-md ${
        isActive ? 'bg-cyan-800' : ''
      }`
    }
  >
    {children}
  </NavLink>
);

export default NavBar;
