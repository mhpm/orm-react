import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import App from '../App';
import LoadingPage from '@/pages/LoadingPage';

// Lazy loading the components
const UserPage = React.lazy(() => import('@/modules/users/pages/UserPage.tsx'));
const EditUserPage = React.lazy(
  () => import('@/modules/users/pages/EditUserPage.tsx')
);
const NewsPage = React.lazy(() => import('@/modules/news/pages/NewsPage.tsx'));
const NotFound = React.lazy(() => import('@/pages/NotFound.tsx'));
const Challenges = React.lazy(() => import('@/pages/Challenges.js'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <UserPage />,
      },
      {
        path: 'users/edit/:id',
        element: <EditUserPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      },
      {
        path: 'challenges',
        element: <Challenges />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
