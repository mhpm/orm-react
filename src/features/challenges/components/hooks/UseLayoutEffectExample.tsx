//* UseLayoutEffectExample Component: Demonstrates the use of the `useLayoutEffect` Hook

//* Technical Explanation:
// `useLayoutEffect` runs after DOM updates but before the browser repaints. It is used for synchronous layout reads and updates.

//* Easier Explanation:
// `useLayoutEffect` is like `useEffect`, but it runs earlier, allowing you to measure or modify the DOM before the user sees it.

//* When to Use:
// Use `useLayoutEffect` when you need to measure or update the DOM (e.g., calculating element sizes or positions).

import React, { useRef, useLayoutEffect } from 'react';

const UseLayoutEffectExample: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const width = boxRef.current?.offsetWidth;
    console.log('Box width:', width); // Logs the width of the element.
  }, []); // Runs only once after the component mounts.

  return (
    <div
      ref={boxRef}
      style={{ width: '200px', height: '100px', backgroundColor: 'lightblue' }}
    >
      Measure me!
    </div>
  );
};

export default UseLayoutEffectExample;
