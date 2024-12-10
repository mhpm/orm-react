import{j as c}from"./jsx-runtime-CkxqCPlQ.js";import{r}from"./index-DJO9vBfz.js";const t=()=>{const o=r.useRef(null);return r.useLayoutEffect(()=>{var s;const f=(s=o.current)==null?void 0:s.offsetWidth;console.log("Box width:",f)},[]),c.jsx("div",{ref:o,style:{width:"200px",height:"100px",backgroundColor:"lightblue"},children:"Measure me!"})};t.__docgenInfo={description:"",methods:[],displayName:"UseLayoutEffectExample"};const d={title:"Hooks/UseLayoutEffectExample",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
### What is \`useLayoutEffect\`?

The \`useLayoutEffect\` hook is similar to \`useEffect\`, but it runs synchronously after all DOM mutations and before the browser paints the screen.

### Deep Technical Explanation

- It is blocking, meaning the browser waits for the layout effect to finish before repainting.
- Typically used for layout measurement or synchronous DOM updates.
- Avoid heavy computations inside \`useLayoutEffect\` to prevent blocking rendering.

### Practical Examples

1. **Measure DOM Elements:** Get the dimensions or position of elements after render.
2. **Synchronize Scroll Positions:** Adjust scroll or layout immediately after changes.
3. **Animations:** Perform pre-animation measurements.

### Key Points for Interviews

- **Comparison to \`useEffect\`:** Use \`useLayoutEffect\` only when you need to read/write to the DOM immediately.
- **Performance Impact:** Blocking behavior can affect performance if overused.
- **SSR Considerations:** \`useLayoutEffect\` only runs on the client; not suitable for server-side rendering.

### Example Usage
\`\`\`tsx
useLayoutEffect(() => {
  const width = boxRef.current?.offsetWidth;
  console.log('Width:', width);
}, []);
\`\`\`
Measure and log the width of an element after it renders.
        `}}}},e=()=>c.jsx(t,{});e.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"() => <UseLayoutEffectExample />",...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,d as default};
