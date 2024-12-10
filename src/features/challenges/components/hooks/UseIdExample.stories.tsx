import UseIdExample from './UseIdExample';

export default {
  title: 'Hooks/UseIdExample',
  component: UseIdExample,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### What is \`useId\`?

The \`useId\` hook generates unique, stable IDs that are server-safe, ensuring proper hydration in server-side rendering (SSR) environments.

### Deep Technical Explanation

- Provides stable and deterministic IDs, avoiding mismatches between server and client rendering.
- Useful for form elements that need unique IDs for accessibility (e.g., \`label\` and \`input\` pairs).
- Works seamlessly with React’s SSR and hydration process.

### Practical Examples

1. **Accessible Forms:** Link \`label\` and \`input\` using unique IDs.
2. **Dynamic Components:** Generate unique keys for components rendered conditionally.
3. **SSR Safety:** Ensure ID consistency when rendering on the server and rehydrating on the client.

### Key Points for Interviews

- **Server-Safe:** Unlike manually generated IDs, \`useId\` avoids mismatches in SSR.
- **Deterministic:** IDs remain stable across renders for consistent accessibility.
- **Use Case:** Primarily useful for accessibility and SSR environments.

### Example Usage
\`\`\`tsx
const id = useId();
<label htmlFor={id}>Name</label>
<input id={id} type="text" />;
\`\`\`
This ensures the label is correctly associated with the input field.
        `,
      },
    },
  },
};

export const Default = () => <UseIdExample />;
