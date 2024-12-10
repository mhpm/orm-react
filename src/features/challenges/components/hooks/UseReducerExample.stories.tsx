import UseReducerExample from './UseReducerExample';

export default {
  title: 'Hooks/UseReducerExample',
  component: UseReducerExample,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### What is \`useReducer\`?

The \`useReducer\` hook is an alternative to \`useState\` for managing complex state transitions. It is particularly useful when the state logic involves multiple sub-values or depends on previous state.

### Deep Technical Explanation

- \`useReducer\` works by passing a reducer function and an initial state.
- The reducer function specifies how state changes based on dispatched actions.
- Mimics Redux-like state management but on a component level.

### Practical Examples

1. **Shopping Cart:** Manage add/remove item logic with a reducer.
2. **Form Handling:** Manage form field updates and validation states.
3. **Finite State Machines:** Model UI states with transitions.

### Key Points for Interviews

- **Action Types:** Define action types as constants or enums for readability and maintainability.
- **Pure Reducers:** Ensure the reducer is a pure function (no side effects).
- **Comparison to useState:** \`useReducer\` is better suited for managing interdependent states.

### Example Usage
\`\`\`tsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
};
const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: 'increment' });
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => <UseReducerExample />;
