import UseContextExample from './UseContextExample';

export default {
  title: 'Hooks/UseContextExample',
  component: UseContextExample,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### What is \`useContext\`?

The \`useContext\` hook simplifies consuming context values in React. It eliminates the need for manually passing props through intermediate components (prop drilling).

### Deep Technical Explanation

- Works with React's \`Context\` API to share global state or values.
- React optimizes context updates, ensuring that only subscribed components re-render.
- Best suited for lightweight global state (e.g., themes, language preferences).

### Practical Examples

1. **Theme Management:** Share dark or light mode settings across the app.
2. **Authentication:** Manage user login status or tokens globally.
3. **Localization:** Share current language settings across components.

### Key Points for Interviews

- **Performance Considerations:** Avoid deeply nested context updates. Use libraries like Zustand or Redux for heavy state management.
- **Provider Pattern:** Wrap your app with a \`Provider\` component to supply the context value.

### Example Usage
\`\`\`tsx
const ThemeContext = createContext('light');
const theme = useContext(ThemeContext);
return <div style={{ background: theme === 'dark' ? '#333' : '#FFF' }}>Content</div>;
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => <UseContextExample />;
