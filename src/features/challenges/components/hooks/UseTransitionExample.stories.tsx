import UseTransitionExample from './UseTransitionExample';

export default {
  title: 'Hooks/UseTransitionExample',
  component: UseTransitionExample,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### What is \`useTransition\`?

The \`useTransition\` hook allows you to defer non-urgent state updates, ensuring that high-priority updates like user input remain responsive.

### Deep Technical Explanation

- It provides two values: \`isPending\` and \`startTransition\`.
- \`startTransition\` lets you mark updates as low-priority.
- React batches transitions for performance.

### Practical Examples

1. **Rendering Large Lists:** Avoid UI freezes when rendering thousands of items.
2. **Non-Critical Updates:** Defer animations or background tasks.
3. **Search Bars:** Delay filtering large data sets while maintaining input responsiveness.

### Key Points for Interviews

- **User Experience:** Focus on responsiveness by separating urgent and non-urgent updates.
- **Batching:** React intelligently batches low-priority updates to minimize rendering overhead.
- **Best Practices:** Use sparingly for performance-critical tasks.

### Example Usage
\`\`\`tsx
const [isPending, startTransition] = useTransition();
startTransition(() => setFilteredData(filterLargeData(data)));
\`\`\`
Delay filtering while keeping the input responsive.
        `,
      },
    },
  },
};

export const Default = () => <UseTransitionExample />;
