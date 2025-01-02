import { createBrowserRouter } from 'react-router';
import { Suspense, lazy } from 'react';
import App from '../App';
import LoadingPage from '@/pages/LoadingPage';
import ErrorPage from '@/pages/ErrorPage';
import TicTacToe from '@/features/challenges/components/Tictactoe';
import LocalStorage from '@/features/challenges/components/LocaStorage';
import Accordion from '@/features/challenges/components/Accordion';
import HabitChart from '@/features/challenges/components/HabitChart';
import AuthPage from '@/features/auth/pages/AuthPage';

import { ROUTES } from '@/constants/routes';

import { ProtectedRoute } from '@/components'; // Path to your ProtectedRoute
import WelcomePage from '@/pages/WelcomePage';

const UserPage = lazy(() => import('@/features/users/pages/UserPage'));
const EditUserPage = lazy(() => import('@/features/users/pages/EditUserPage'));
const PostsPage = lazy(() => import('@/features/posts/pages/PostsPage'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Challenges = lazy(() => import('@/features/challenges/pages/Challenges'));

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
        path: '/',
        element: <WelcomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.USERS,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.EDIT_USER,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <EditUserPage />
            </ProtectedRoute>
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.POSTS,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <PostsPage />
            </ProtectedRoute>
          </Suspense>
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
            path: ROUTES.TICTACTOE,
            element: (
              <Suspense fallback={<LoadingPage />}>
                <TicTacToe />
              </Suspense>
            ),
          },
          {
            path: ROUTES.LOCALSTORAGE,
            element: (
              <Suspense fallback={<LoadingPage />}>
                <LocalStorage />
              </Suspense>
            ),
          },
          {
            path: ROUTES.ACCORDION,
            element: (
              <Suspense fallback={<LoadingPage />}>
                <Accordion />
              </Suspense>
            ),
          },
          {
            path: ROUTES.HABITCHART,
            element: (
              <Suspense fallback={<LoadingPage />}>
                <HabitChart />
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
