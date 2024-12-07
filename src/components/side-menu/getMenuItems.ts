import { FaUsers, FaNewspaper } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '@/constants/routes';

export const getMenuItems = () => {
  const { t } = useTranslation();

  return [
    {
      title: t(ROUTES.USERS),
      icon: FaUsers,
      route: ROUTES.USERS,
    },
    {
      title: t(ROUTES.NEWS),
      icon: FaNewspaper,
      route: ROUTES.NEWS,
    },
    {
      title: ROUTES.CHALLENGES,
      icon: FaNewspaper,
      subItems: [
        {
          title: 'Tic Tac Toe',
          route: 'challenges/tictactoe',
        },
        {
          title: 'Local Storage',
          route: 'challenges/localstorage',
        },
        {
          title: 'Accordion',
          route: 'challenges/accordion',
        },
        {
          title: 'Habit Chart',
          route: 'challenges/habitchart',
        },
      ],
    },
  ];
};
