//* UseRefExample Component: Demonstrates the use of the `useRef` Hook

//* Technical Explanation:
// `useRef` creates a reference to a DOM element or a value that persists across renders. It doesn’t cause re-renders when the value changes.

//* Easier Explanation:
// `useRef` helps you store something (like an input or a timer) that doesn’t need to re-render the component.

//* When to Use:
// Use `useRef` to access DOM elements or store mutable values.

import React, { useRef } from 'react';

const UseRefExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus(); // Focuses the input element.
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default UseRefExample;
