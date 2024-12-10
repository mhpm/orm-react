import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as l}from"./index-DJO9vBfz.js";const a=()=>{const[i,r]=l.useState(0);return t.jsxs("div",{children:[t.jsxs("p",{children:["Count: ",i]}),t.jsx("button",{onClick:()=>r(c=>c+1),children:"Increment"})]})};a.__docgenInfo={description:"",methods:[],displayName:"UseStateExample"};const d={title:"Hooks/UseStateExample",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},e=()=>t.jsx(a,{});e.__docgenInfo={description:"",methods:[],displayName:"Default"};var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"() => <UseStateExample />",...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,d as default};
