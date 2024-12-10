import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as a}from"./index-DJO9vBfz.js";const i=()=>{const[l,c]=a.useState(""),[d,u]=a.useState([]),[m,g]=a.useTransition(),h=n=>{const s=n.target.value;c(s),g(()=>{const x=Array.from({length:1e4},(T,f)=>`${s} Item ${f}`);u(x)})};return e.jsxs("div",{children:["input: ",l,e.jsx("input",{type:"text",onChange:h,placeholder:"Type something..."}),m&&e.jsx("p",{children:"Loading..."}),e.jsx("ul",{children:d.map((n,s)=>e.jsx("li",{children:n},s))})]})};i.__docgenInfo={description:"",methods:[],displayName:"UseTransitionExample"};const E={title:"Hooks/UseTransitionExample",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},t=()=>e.jsx(i,{});t.__docgenInfo={description:"",methods:[],displayName:"Default"};var r,o,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"() => <UseTransitionExample />",...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const U=["Default"];export{t as Default,U as __namedExportsOrder,E as default};
