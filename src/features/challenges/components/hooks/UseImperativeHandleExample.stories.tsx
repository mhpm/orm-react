import UseImperativeHandleExample from './UseImperativeHandleExample';

export default {
  title: 'Hooks/UseImperativeHandleExample',
  component: UseImperativeHandleExample,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### What is \`useImperativeHandle\`?

The \`useImperativeHandle\` hook allows you to customize the \`ref\` instance exposed to the parent component. It’s commonly used with \`forwardRef\`.

### Deep Technical Explanation

- The \`ref\` object exposes methods or properties explicitly defined using \`useImperativeHandle\`.
- Ideal for controlling child behavior from the parent without directly accessing its internal implementation.

### Practical Examples

1. **Custom Methods:** Expose a \`focus\` method for a child input component.
2. **Controlling Animations:** Allow parent components to trigger animations or transitions.
3. **Scroll Management:** Provide methods to scroll to a specific part of a child component.

### Key Points for Interviews

- **Forwarding Refs:** Combine \`useImperativeHandle\` with \`forwardRef\` to expose the \`ref\` correctly.
- **Encapsulation:** Expose only what’s necessary; avoid leaking implementation details.
- **Alternatives:** For simpler cases, directly use \`useRef\`.

### Example Usage
\`\`\`tsx
const ref = useRef();
<Child ref={ref} />;
ref.current.focus(); // Calls the focus method exposed by the child component.
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => <UseImperativeHandleExample />;
