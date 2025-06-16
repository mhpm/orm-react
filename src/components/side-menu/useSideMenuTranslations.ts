import { useTranslation } from 'react-i18next';

export const useSideMenuTranslations = () => {
  const { t } = useTranslation();
  return {
    users: t('sideMenu.users'),
    posts: t('sideMenu.posts'),
    openRouter: t('sideMenu.openRouter'),
    challenges: t('sideMenu.challenges.challenges'),
    tictactoe: t('sideMenu.challenges.tictactoe'),
    localStorage: t('sideMenu.challenges.localStorage'),
    accordion: t('sideMenu.challenges.accordion'),
    habitChart: t('sideMenu.challenges.habitChart'),
  };
};
