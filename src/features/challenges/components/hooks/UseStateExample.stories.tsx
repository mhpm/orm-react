import UseStateExample from './UseStateExample';

export default {
  title: 'Hooks/UseStateExample',
  component: UseStateExample,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### What is \`useState\`?

The \`useState\` hook is one of the fundamental React hooks that allows you to add state management to functional components. It initializes a state variable and provides a setter function to update that variable.

### Deep Technical Explanation

- \`useState\` triggers re-renders whenever the state is updated.
- State updates are asynchronous, meaning React batches multiple updates for performance.
- The initial state can be a primitive (e.g., number, string) or an object. A function can also be passed to lazily initialize the state.

### Practical Examples

1. **Counter Example:** Managing a number value that increments on button clicks.
2. **Form Handling:** Storing input field values in local state.
3. **Toggles:** Managing visibility of modals or dropdowns.

### Key Points for Interviews

- **State Immutability:** Always update state immutably (e.g., use a spread operator for objects/arrays).
- **Re-rendering:** Updating state causes React to re-render the component.
- **Lazy Initialization:** Use a function if the initial state is computationally expensive.

### Example Usage
\`\`\`tsx
const [count, setCount] = useState(0);

function increment() {
  setCount((prev) => prev + 1); // Functional updates are ideal for depending on the previous state.
}
\`\`\`
Click the button to increment the counter.
        `,
      },
    },
  },
};

export const Default = () => <UseStateExample />;
