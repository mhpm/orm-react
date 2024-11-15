import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import App from '../App';
import LoadingPage from '@/pages/LoadingPage';
import ErrorPage from '@/pages/ErrorPage';

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
        errorElement: <ErrorPage />,
      },
      {
        path: 'users/edit/:id',
        element: <EditUserPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'challenges',
        element: <Challenges />,
        errorElement: <ErrorPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
