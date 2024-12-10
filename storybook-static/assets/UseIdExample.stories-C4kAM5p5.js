import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{r as o}from"./index-DJO9vBfz.js";const n=()=>{const t=o.useId();return s.jsxs("div",{children:[s.jsxs("label",{htmlFor:t,children:["Name: ",t]}),s.jsx("input",{id:t,type:"text",placeholder:"Enter your name"})]})};n.__docgenInfo={description:"",methods:[],displayName:"UseIdExample"};const c={title:"Hooks/UseIdExample",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},e=()=>s.jsx(n,{});e.__docgenInfo={description:"",methods:[],displayName:"Default"};var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"() => <UseIdExample />",...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,c as default};
