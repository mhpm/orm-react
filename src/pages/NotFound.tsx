import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-6xl dark:text-gray-400">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">{t('sorry')}</p>
          <br />
          <br />
          <Link
            rel="noopener noreferrer"
            to="/"
            className="px-8 py-3 font-semibold button"
          >
            {t('backToHome')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
