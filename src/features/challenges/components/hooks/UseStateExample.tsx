//* UseStateExample Component: Demonstrates the use of the `useState` Hook

//* Technical Explanation:
// `useState` adds state management to functional components. It returns a state variable and a setter function to update state and trigger re-renders.

//* Easier Explanation:
// `useState` is used to store and update values like counters, form inputs, or toggles in a component.

//* When to Use:
// Use `useState` for managing local, simple state that changes over time.

import React, { useState } from 'react';

const UseStateExample: React.FC = () => {
  const [count, setCount] = useState<number>(0); // State variable and setter function.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default UseStateExample;
