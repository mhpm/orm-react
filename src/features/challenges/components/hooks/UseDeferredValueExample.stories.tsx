import UseDeferredValueExample from './UseDeferredValueExample';

export default {
  title: 'Hooks/UseDeferredValueExample',
  component: UseDeferredValueExample,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### What is \`useDeferredValue\`?

The \`useDeferredValue\` hook delays the update of a value to a lower priority, improving responsiveness by deferring expensive renders.

### Deep Technical Explanation

- Works similarly to \`useTransition\`, but for values instead of state updates.
- Returns a deferred version of the input value that updates asynchronously.
- React prioritizes urgent updates (e.g., user input) over deferred updates.

### Practical Examples

1. **Search Input:** Delay the filtering of a large data set while keeping the input responsive.
2. **Large Lists:** Render large components or lists without blocking the UI.
3. **Background Updates:** Defer non-critical value changes to prevent UI lag.

### Key Points for Interviews

- **Use Case:** Improves performance for UI-heavy applications by prioritizing critical updates.
- **Comparison to \`useTransition\`:** \`useTransition\` defers state updates, while \`useDeferredValue\` defers value rendering.
- **Performance Boost:** Prevents large renders from blocking user interactions.

### Example Usage
\`\`\`tsx
const deferredValue = useDeferredValue(value);
return <List data={deferredValue} />;
\`\`\`
This delays rendering the list while prioritizing user input.
        `,
      },
    },
  },
};

export const Default = () => <UseDeferredValueExample />;
