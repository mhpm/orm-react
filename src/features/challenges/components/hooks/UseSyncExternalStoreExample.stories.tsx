import UseSyncExternalStoreExample from './UseSyncExternalStoreExample';

export default {
  title: 'Hooks/UseSyncExternalStoreExample',
  component: UseSyncExternalStoreExample,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### What is \`useSyncExternalStore\`?

The \`useSyncExternalStore\` hook synchronizes external store state with React, ensuring consistent behavior across client and server rendering.

### Deep Technical Explanation

- Provides a standard way to consume external state in React.
- Ensures consistent hydration during SSR by using a snapshot of the store.
- Reactively updates the component when the store changes.

### Practical Examples

1. **State Management:** Integrate libraries like Redux, Zustand, or MobX with React.
2. **Browser Events:** Track window dimensions or online/offline status.
3. **External Subscriptions:** Sync state from APIs or WebSocket connections.

### Key Points for Interviews

- **SSR Support:** Ensures consistent state between server and client rendering.
- **Custom Stores:** Useful for integrating external state management libraries with React.
- **Reactivity:** Automatically re-renders components when the external store changes.

### Example Usage
\`\`\`tsx
const state = useSyncExternalStore(subscribe, getSnapshot);
return <p>Current state: {state}</p>;
\`\`\`
Subscribe to an external store and reflect its state in the UI.
        `,
      },
    },
  },
};

export const Default = () => <UseSyncExternalStoreExample />;
