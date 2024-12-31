import { Users, Newspaper, Code, Hash } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '@/constants/routes';
import { IconType } from 'react-icons/lib';
import { useCurrentUser } from '@/hooks/useCurrentUser';

export interface MenuItem {
  title: string;
  icon?: IconType;
  route?: string;
  subItems?: MenuItem[];
}

export const getMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();
  const { isAuthenticated } = useCurrentUser();

  const menuItems: MenuItem[] = [
    {
      title: t(ROUTES.USERS),
      icon: Users,
      route: isAuthenticated ? ROUTES.USERS : undefined, // Only show if signed in
    },
    {
      title: t(ROUTES.POSTS),
      icon: Newspaper,
      route: isAuthenticated ? ROUTES.POSTS : undefined, // Only show if signed in
    },
    {
      title: ROUTES.CHALLENGES,
      icon: Code,
      subItems: [
        {
          title: 'Tic Tac Toe',
          route: `${ROUTES.CHALLENGES}/${ROUTES.TICTACTOE}`,
          icon: Hash,
        },
        {
          title: 'Local Storage',
          route: `${ROUTES.CHALLENGES}/${ROUTES.LOCALSTORAGE}`,
        },
        {
          title: 'Accordion',
          route: `${ROUTES.CHALLENGES}/${ROUTES.ACCORDION}`,
        },
        {
          title: 'Habit Chart',
          route: `${ROUTES.CHALLENGES}/${ROUTES.HABITCHART}`,
        },
      ],
    },
  ];

  // Filter out undefined routes to avoid adding inaccessible menu items
  return menuItems.filter((item) => item.route || item.subItems);
};
