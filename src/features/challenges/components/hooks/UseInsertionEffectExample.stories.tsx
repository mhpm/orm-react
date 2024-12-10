import UseInsertionEffectExample from './UseInsertionEffectExample';

export default {
  title: 'Hooks/UseInsertionEffectExample',
  component: UseInsertionEffectExample,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### What is \`useInsertionEffect\`?

The \`useInsertionEffect\` hook runs before any DOM mutations and is specifically designed for injecting critical styles dynamically before rendering.

### Deep Technical Explanation

- Runs synchronously before layout effects (\`useLayoutEffect\`) and regular effects (\`useEffect\`).
- Ensures styles or changes are applied before any DOM reads.
- Ideal for CSS-in-JS libraries or scenarios where critical styles need to be injected dynamically.

### Practical Examples

1. **Dynamic Style Injection:** Inject CSS rules into the document head.
2. **Critical Styles:** Apply styles that must load before the browser calculates the layout.
3. **Styling Libraries:** Optimize tools like Emotion or styled-components.

### Key Points for Interviews

- **Use Case:** Specifically designed for style injection and critical DOM changes.
- **Performance Considerations:** Avoid heavy computations in \`useInsertionEffect\` as it blocks rendering.
- **Limitations:** It is not commonly needed unless working with advanced CSS-in-JS libraries.

### Example Usage
\`\`\`tsx
useInsertionEffect(() => {
  const style = document.createElement('style');
  style.textContent = '.dynamic { color: blue; }';
  document.head.appendChild(style);
  return () => document.head.removeChild(style);
}, []);
\`\`\`
Inject critical styles dynamically before the browser renders.
        `,
      },
    },
  },
};

export const Default = () => <UseInsertionEffectExample />;
