//* UseSyncExternalStoreExample Component: Demonstrates the use of the `useSyncExternalStore` Hook

//* Technical Explanation:
// `useSyncExternalStore` integrates external store data into React. It ensures the state is consistent across the server and client.

//* Easier Explanation:
// `useSyncExternalStore` lets you sync external data (like browser events) with your app.

//* When to Use:
// Use `useSyncExternalStore` for syncing third-party state management libraries or native browser events.

import React, { useSyncExternalStore } from 'react';

const subscribe = (callback: () => void) => {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
};

const getSnapshot = () => window.innerWidth; // Get the current window width.

const UseSyncExternalStoreExample: React.FC = () => {
  const width = useSyncExternalStore(subscribe, getSnapshot);

  return <p>Current window width: {width}px</p>;
};

export default UseSyncExternalStoreExample;
