import UseEffectExample from './UseEffectExample';

export default {
  title: 'Hooks/UseEffectExample',
  component: UseEffectExample,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### What is \`useEffect\`?

The \`useEffect\` hook is designed for managing side effects in functional components, such as data fetching, setting up subscriptions, or manually modifying the DOM.

### Deep Technical Explanation

- By default, \`useEffect\` runs after every render.
- You can control when it runs by providing a dependency array.
- Cleanup functions are executed when the component unmounts or dependencies change.

### Types of Side Effects

1. **Data Fetching:** Fetching data from an API when a component mounts.
2. **Subscriptions:** Setting up and tearing down event listeners or WebSocket connections.
3. **DOM Updates:** Updating the DOM based on state changes.

### Key Points for Interviews

- **Dependency Array:** Controls when the effect runs. An empty array (\`[]\`) runs the effect only once (on mount).
- **Cleanup Function:** Used to prevent memory leaks, especially for subscriptions or event listeners.
- **Comparison to Class Components:** Replaces \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\`.

### Example Usage
\`\`\`tsx
useEffect(() => {
  const fetchData = async () => {
    const result = await fetch('https://api.example.com');
    setData(await result.json());
  };
  fetchData();

  return () => {
    console.log('Cleanup'); // Runs on unmount or dependency change.
  };
}, []);
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => <UseEffectExample />;
