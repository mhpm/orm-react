import UseRefExample from './UseRefExample';

export default {
  title: 'Hooks/UseRefExample',
  component: UseRefExample,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### What is \`useRef\`?

The \`useRef\` hook creates a mutable reference object that persists across renders. It does not trigger re-renders when updated, making it ideal for accessing DOM elements or storing mutable values.

### Deep Technical Explanation

- The \`ref\` object has a single property \`current\`, which can hold any value.
- Unlike state, changes to \`current\` do not cause re-renders.
- React automatically assigns \`ref\`s to DOM elements, providing direct access to them.

### Practical Examples

1. **Access DOM Elements:** Focus an input field programmatically.
2. **Store Mutable Values:** Keep track of timers or previous state without causing re-renders.
3. **Custom Hooks:** Use \`useRef\` to create reusable hooks like a click tracker.

### Key Points for Interviews

- **When to Use \`useRef\`:** Access DOM elements or store mutable data that doesn’t need to trigger UI updates.
- **Ref vs State:** Use state for UI-driven values and \`useRef\` for purely internal logic.
- **Avoid Overuse:** Avoid replacing state with \`useRef\` unless performance is critical.

### Example Usage
\`\`\`tsx
const inputRef = useRef(null);
const focusInput = () => inputRef.current?.focus();
return <input ref={inputRef} placeholder="Focus me!" />;
\`\`\`
Click the button to focus the input field.
        `,
      },
    },
  },
};

export const Default = () => <UseRefExample />;
