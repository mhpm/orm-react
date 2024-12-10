//* UseIdExample Component: Demonstrates the use of the `useId` Hook

//* Technical Explanation:
// `useId` generates unique, stable IDs for elements, ensuring they work correctly with SSR and hydration.

//* Easier Explanation:
// `useId` helps you create unique IDs for things like form inputs and labels.

//* When to Use:
// Use `useId` for generating unique IDs for accessibility or form elements.

import React, { useId } from 'react';

const UseIdExample: React.FC = () => {
  const id = useId(); // Generate a unique ID.

  return (
    <div>
      <label htmlFor={id}>Name: {id}</label>
      <input id={id} type="text" placeholder="Enter your name" />
    </div>
  );
};

export default UseIdExample;
