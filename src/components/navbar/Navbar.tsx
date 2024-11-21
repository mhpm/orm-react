import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { FaUser, FaNewspaper } from 'react-icons/fa';

const NavBar = memo(() => {
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
            src="https://avatar.iran.liara.run/public/boy"
            alt="Profile"
            className="rounded-full w-24 h-24 mb-4"
            loading="lazy"
          />
          <h1 className="text-2xl font-semibold">Michelle Perez</h1>
          <p className="text-sm text-gray-400">I'm Developer</p>
        </div>
        <nav className="flex flex-col gap-2 mt-8 font-extrabold">
          <Link to="/">
            <FaUser className="h-5 w-5 mr-3" />
            {t('users')}
          </Link>
          <Link to="/news">
            <FaNewspaper className="h-5 w-5 mr-3" />
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
});

const Link = memo(
  ({ to, children }: { to: string; children: React.ReactNode }) => (
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
  )
);

export default NavBar;
