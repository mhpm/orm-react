//* ThemeComponent: Demonstrates the use of the `useContext` Hook

//* Technical Explanation:
// `useContext` consumes data from a context object and avoids prop drilling. It provides an easy way to share global data.

//* Easier Explanation:
// `useContext` lets you access shared data (like themes or user info) without passing it down manually.

//* When to Use:
// Use `useContext` when data needs to be accessed by multiple components, such as authentication or theming.

import React, { createContext, useContext } from 'react';

const ThemeContext = createContext<string>('light');

const ThemeComponent: React.FC = () => {
  const theme = useContext(ThemeContext);

  return <p>Current theme: {theme}</p>;
};

const UseContextExample: React.FC = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeComponent />
    </ThemeContext.Provider>
  );
};

export default UseContextExample;
