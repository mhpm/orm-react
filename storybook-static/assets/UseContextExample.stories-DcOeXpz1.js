import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r}from"./index-DJO9vBfz.js";const i=r.createContext("light"),l=()=>{const c=r.useContext(i);return t.jsxs("p",{children:["Current theme: ",c]})},o=()=>t.jsx(i.Provider,{value:"dark",children:t.jsx(l,{})});o.__docgenInfo={description:"",methods:[],displayName:"UseContextExample"};const d={title:"Hooks/UseContextExample",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
### What is \`useContext\`?

The \`useContext\` hook simplifies consuming context values in React. It eliminates the need for manually passing props through intermediate components (prop drilling).

### Deep Technical Explanation

- Works with React's \`Context\` API to share global state or values.
- React optimizes context updates, ensuring that only subscribed components re-render.
- Best suited for lightweight global state (e.g., themes, language preferences).

### Practical Examples

1. **Theme Management:** Share dark or light mode settings across the app.
2. **Authentication:** Manage user login status or tokens globally.
3. **Localization:** Share current language settings across components.

### Key Points for Interviews

- **Performance Considerations:** Avoid deeply nested context updates. Use libraries like Zustand or Redux for heavy state management.
- **Provider Pattern:** Wrap your app with a \`Provider\` component to supply the context value.

### Example Usage
\`\`\`tsx
const ThemeContext = createContext('light');
const theme = useContext(ThemeContext);
return <div style={{ background: theme === 'dark' ? '#333' : '#FFF' }}>Content</div>;
\`\`\`
        `}}}},e=()=>t.jsx(o,{});e.__docgenInfo={description:"",methods:[],displayName:"Default"};var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"() => <UseContextExample />",...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,d as default};
