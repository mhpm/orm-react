import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import UserPage from '@/modules/users/pages/UserPage.tsx';
import EditUserPage from '@/modules/users/pages/EditUserPage.tsx';
import NewsPage from '@/modules/news/pages/NewsPage.tsx';
import NotFound from '@/pages/NotFound.tsx';
import Challenges from '@/pages/Challenges.js';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
