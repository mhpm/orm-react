import { FaUsers, FaNewspaper } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

export const getMenuItems = () => {
  const { t } = useTranslation();

  return [
    {
      title: t('users'),
      icon: FaUsers,
      route: '/users',
    },
    {
      title: t('news'),
      icon: FaNewspaper,
      route: '/news',
    },
  ];
};
