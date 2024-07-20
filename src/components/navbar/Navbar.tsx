import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [english, setEnglish] = useState(i18n.language === 'en' ? true : false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setEnglish(!english);
  };

  return (
    <>
      <nav className="hidden lg:flex p-4 gap-5 w-[150px] h-screen flex-col items-center justify-between bg-cyan-800 text-center">
        <div className='flex flex-col gap-5'>
          <Link to="/">{t('users')}</Link>
          <Link to="/news">{t('news')}</Link>
        </div>
          <button className='text-sm' onClick={() => changeLanguage(english ? 'es' : 'en')}>
            {english ? 'ES' : 'EN'}
          </button>
      </nav>
      <nav className="lg:hidden p-4 flex justify-between items-center w-full bg-cyan-800 text-left">
        <div>
          <Link to="/">{t('users')}</Link>
          <Link to="/news">{t('news')}</Link>
        </div>
          <button className='text-sm' onClick={() => changeLanguage(english ? 'es' : 'en')}>
            {english ? 'ES' : 'EN'}
          </button>
      </nav>
    </>
  );
};

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
