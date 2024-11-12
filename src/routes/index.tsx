import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import App from '../App';

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
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UserPage />
          </Suspense>
        ),
      },
      {
        path: 'users/edit/:id',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <EditUserPage />
          </Suspense>
        ),
      },
      {
        path: 'news',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NewsPage />
          </Suspense>
        ),
      },
      {
        path: 'challenges',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Challenges />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
