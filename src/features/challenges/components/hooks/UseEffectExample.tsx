//* DataFetcher Component: Demonstrates the use of the `useEffect` Hook

//* Technical Explanation:
// `useEffect` allows you to perform side effects in a functional component. It runs after render, and you can control when it runs with dependencies.

//* Easier Explanation:
// `useEffect` helps you run code when something happens, like fetching data or cleaning up resources.

//* When to Use:
// Use `useEffect` for fetching data, listening to events, or managing subscriptions.

import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const UseEffectExample: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []); // Runs only once when the component mounts.

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UseEffectExample;
