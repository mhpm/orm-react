//* UseTransitionExample Component: Demonstrates the use of the `useTransition` Hook

//* Technical Explanation:
// `useTransition` allows you to prioritize updates by marking some state changes as lower priority.

//* Easier Explanation:
// `useTransition` makes heavy tasks (like loading large lists) feel smoother by delaying non-critical updates.

//* When to Use:
// Use `useTransition` for deferring non-urgent updates while keeping the app responsive.

import React, { useState, useTransition } from 'react';

const UseTransitionExample: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    // Mark this state update as low priority.
    startTransition(() => {
      const newList = Array.from(
        { length: 10000 },
        (_, i) => `${value} Item ${i}`
      );
      setList(newList);
    });
  };

  return (
    <div>
      input: {input}
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      {isPending && <p>Loading...</p>}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseTransitionExample;
