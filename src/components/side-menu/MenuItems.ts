import { Users, Newspaper, Code, Hash } from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import { useSideMenuTranslations } from './useSideMenuTranslations';
import { MenuItem } from './interfaces/interfaces';

/**
 * Returns the menu items for the side menu.
 * @param isAuthenticated - Whether the user is authenticated
 * @returns Array of MenuItem objects
 */
export const MenuItems = (isAuthenticated: boolean): MenuItem[] => {
  const translations = useSideMenuTranslations();

  const menuItems: MenuItem[] = [
    {
      title: translations.users,
      icon: Users,
      route: isAuthenticated ? ROUTES.USERS : '',
    },
    {
      title: translations.posts,
      icon: Newspaper,
      route: isAuthenticated ? ROUTES.POSTS : '',
    },
    {
      title: translations.challenges,
      icon: Code,
      subItems: [
        {
          title: translations.tictactoe,
          route: `${ROUTES.CHALLENGES}/${ROUTES.TICTACTOE}`,
          icon: Hash,
        },
        {
          title: translations.localStorage,
          route: `${ROUTES.CHALLENGES}/${ROUTES.LOCALSTORAGE}`,
        },
        {
          title: translations.accordion,
          route: `${ROUTES.CHALLENGES}/${ROUTES.ACCORDION}`,
        },
        {
          title: translations.habitChart,
          route: `${ROUTES.CHALLENGES}/${ROUTES.HABITCHART}`,
        },
      ],
      route: ''
    },
  ];

  // Only return menu items that are accessible (have a route or subItems)
  return menuItems.filter((item) => Boolean(item.route || item.subItems));
};
