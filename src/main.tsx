import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import './i18n.ts';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import { router } from './routes/index.tsx';
import { ClerkProvider } from '@clerk/clerk-react';

// Dynamically load the script in development mode
// if (process.env.NODE_ENV === 'development') {
//   const script = document.createElement('script');
//   script.src = 'https://unpkg.com/react-scan/dist/auto.global.js';
//   script.async = true;
//   document.head.appendChild(script);
// }

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Retry failed queries once
      staleTime: 5000, // Cache results for 5 seconds
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ClerkProvider>
  </React.StrictMode>
);
