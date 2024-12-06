import { createBrowserRouter } from 'react-router';
import React, { Suspense } from 'react';
import App from '../App';
import LoadingPage from '@/pages/LoadingPage';
import ErrorPage from '@/pages/ErrorPage';
import TicTacToe from '@/features/challenges/components/Tictactoe';
import LocalStorage from '@/features/challenges/components/LocaStorage';
import Accordion from '@/features/challenges/components/Accordion';
import { ROUTES } from '@/constants/routes';

const UserPage = React.lazy(
  () => import('@/features/users/pages/UserPage.tsx')
);
const EditUserPage = React.lazy(
  () => import('@/features/users/pages/EditUserPage.tsx')
);
const NewsPage = React.lazy(() => import('@/features/news/pages/NewsPage.tsx'));
const NotFound = React.lazy(() => import('@/pages/NotFound.tsx'));
const Challenges = React.lazy(
  () => import('@/features/challenges/pages/Challenges.js')
);

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
        path: ROUTES.USERS,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <UserPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.EDIT_USER,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <EditUserPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.NEWS,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <NewsPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.CHALLENGES,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Challenges />
          </Suspense>
        ),
        children: [
          {
            path: 'tictactoe',
            element: (
              <Suspense fallback={<LoadingPage />}>
                <TicTacToe />
              </Suspense>
            ),
          },
          {
            path: 'localstorage',
            element: (
              <Suspense fallback={<LoadingPage />}>
                <LocalStorage />
              </Suspense>
            ),
          },
          {
            path: 'accordion',
            element: (
              <Suspense fallback={<LoadingPage />}>
                <Accordion />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: ROUTES.NOT_FOUND,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
