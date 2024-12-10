import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as i}from"./index-DJO9vBfz.js";const c=t=>(window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)),l=()=>window.innerWidth,n=()=>{const t=i.useSyncExternalStore(c,l);return a.jsxs("p",{children:["Current window width: ",t,"px"]})};n.__docgenInfo={description:"",methods:[],displayName:"UseSyncExternalStoreExample"};const u={title:"Hooks/UseSyncExternalStoreExample",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},e=()=>a.jsx(n,{});e.__docgenInfo={description:"",methods:[],displayName:"Default"};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"() => <UseSyncExternalStoreExample />",...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,u as default};
