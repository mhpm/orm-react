import { FaUsers, FaNewspaper, FaCode, FaHashtag } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '@/constants/routes';
import { IconType } from 'react-icons/lib';

export interface MenuItem {
  title: string;
  icon?: IconType;
  route?: string;
  subItems?: MenuItem[];
}

export const getMenuItems = (): MenuItem[] => {
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
      icon: FaCode,
      subItems: [
        {
          title: 'Tic Tac Toe',
          route: 'challenges/tictactoe',
          icon: FaHashtag,
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
        {
          title: 'Hooks',
          route: 'challenges/hooks',
        },
      ],
    },
  ];
};
