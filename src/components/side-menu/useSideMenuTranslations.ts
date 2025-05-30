import { useTranslation } from 'react-i18next';
import { TRANSLATION_KEYS } from '@/constants/translationKeys';

export const useSideMenuTranslations = () => {
  const { t } = useTranslation();
  return {
    users: t('sideMenu.users'),
    posts: t('sideMenu.posts'),
    challenges: t('sideMenu.challenges.challenges'),
    tictactoe: t(TRANSLATION_KEYS.SIDE_MENU.CHALLENGES.TICTACTOE),
    localStorage: t(TRANSLATION_KEYS.SIDE_MENU.CHALLENGES.LOCAL_STORAGE),
    accordion: t(TRANSLATION_KEYS.SIDE_MENU.CHALLENGES.ACCORDION),
    habitChart: t(TRANSLATION_KEYS.SIDE_MENU.CHALLENGES.HABIT_CHART),
  };
};
