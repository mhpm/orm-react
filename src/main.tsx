import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n.ts';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import UserPage from '@/pages/users/UserPage.tsx'
import EditUserPage from '@/pages/users/EditUserPage.tsx'
import NewsPage from '@/pages/news/NewsPage.tsx'
import NotFound from '@/pages/NotFound.tsx';
import Test from '@/pages/Test.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <UserPage />,

      },
      {
        path: "users/edit/:id",
        element: <EditUserPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
