import { createBrowserRouter } from 'react-router';
import React, { Suspense } from 'react';
import App from '../App';
import LoadingPage from '@/pages/LoadingPage';
import ErrorPage from '@/pages/ErrorPage';

const UserPage = React.lazy(
  () => import('@/features/users/pages/UserPage.tsx')
);
const EditUserPage = React.lazy(
  () => import('@/features/users/pages/EditUserPage.tsx')
);
const NewsPage = React.lazy(() => import('@/features/news/pages/NewsPage.tsx'));
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'users',
        element: (
          <Suspense fallback={<LoadingPage />}>
            <UserPage />
          </Suspense>
        ),
      },
      {
        path: 'users/edit/:id',
        element: (
          <Suspense fallback={<LoadingPage />}>
            <EditUserPage />
          </Suspense>
        ),
      },
      {
        path: 'news',
        element: (
          <Suspense fallback={<LoadingPage />}>
            <NewsPage />
          </Suspense>
        ),
      },
      {
        path: 'challenges',
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Challenges />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingPage />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
