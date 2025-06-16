import { useTranslation } from 'react-i18next';

export const usePostsTranslations = () => {
  const { t } = useTranslation();
  return {
    TITLE: t('posts.posts'),
    POST: t('posts.post'),
    ADD_POST: t('posts.addPost'),
    IS_ERROR: t('posts.errorLoadingPosts'),
    NO_MORE_POSTS: t('posts.noMorePosts'),
  };
};
