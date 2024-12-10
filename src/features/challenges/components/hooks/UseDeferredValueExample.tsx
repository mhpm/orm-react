//* DeferredSearch Component: Demonstrates the use of the `useDeferredValue` Hook

//* Technical Explanation:
// `useDeferredValue` defers a value's update to prioritize more critical updates.

//* Easier Explanation:
// `useDeferredValue` delays rendering slow components while keeping the app responsive.

//* When to Use:
// Use `useDeferredValue` when you have a value that can update slowly without affecting responsiveness.

import React, { useState, useDeferredValue } from 'react';

const UseDeferredValueExample: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const deferredInput = useDeferredValue(input); // Defers the input value.

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for something..."
      />
      <p>Deferred search value: {deferredInput}</p>
    </div>
  );
};

export default UseDeferredValueExample;
