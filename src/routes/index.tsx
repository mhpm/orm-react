import { createBrowserRouter } from 'react-router';
import React, { Suspense } from 'react';
import App from '../App';
import LoadingPage from '@/pages/LoadingPage';
import ErrorPage from '@/pages/ErrorPage';
import TicTacToe from '@/features/challenges/components/Tictactoe';
import LocalStorage from '@/features/challenges/components/LocaStorage';
import Accordion from '@/features/challenges/components/Accordion';
import HabitChart from '@/features/challenges/components/HabitChart';
import AuthPage from '@/features/auth/pages/AuthPage';

import { ROUTES } from '@/constants/routes';
import Hooks from '@/features/challenges/components/Hooks';

import { ProtectedRoute } from '@/components'; // Path to your ProtectedRoute

const UserPage = React.lazy(
  () => import('@/features/users/pages/UserPage.tsx')
);
const EditUserPage = React.lazy(
  () => import('@/features/users/pages/EditUserPage.tsx')
);
const PostsPage = React.lazy(
  () => import('@/features/posts/pages/PostsPage.tsx')
);
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
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.EDIT_USER,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <EditUserPage />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.POSTS,
        element: (
          <ProtectedRoute>
            <Suspense fallback={<LoadingPage />}>
              <PostsPage />
            </Suspense>
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
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
          {
            path: 'habitchart',
            element: (
              <Suspense fallback={<LoadingPage />}>
                <HabitChart />
              </Suspense>
            ),
          },
          {
            path: 'hooks',
            element: (
              <Suspense fallback={<LoadingPage />}>
                <Hooks />
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
  {
    path: 'auth',
    element: <AuthPage />,
  },
]);
