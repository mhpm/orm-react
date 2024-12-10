//* UseInsertionEffectExample Component: Demonstrates the use of the `useInsertionEffect` Hook

//* Technical Explanation:
// `useInsertionEffect` runs before any DOM mutations. It is ideal for injecting critical styles dynamically before rendering.

//* Easier Explanation:
// `useInsertionEffect` lets you add styles or CSS rules before the browser paints the screen.

//* When to Use:
// Use `useInsertionEffect` when you need to add critical styles dynamically, like in CSS-in-JS libraries.

import React, { useInsertionEffect } from 'react';

const UseInsertionEffectExample: React.FC = () => {
  useInsertionEffect(() => {
    const style = document.createElement('style');
    style.textContent = `.dynamic { color: blue; font-size: 20px; }`;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); // Cleanup styles on unmount.
    };
  }, []);

  return <div className="dynamic">This text is styled dynamically.</div>;
};

export default UseInsertionEffectExample;
