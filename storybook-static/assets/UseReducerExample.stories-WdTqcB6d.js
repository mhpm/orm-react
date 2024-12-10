import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as d}from"./index-DJO9vBfz.js";function u(n,e){switch(e.type){case"add":return[...n,e.item];case"remove":return n.filter(s=>s.id!==e.id);default:throw new Error("Unknown action")}}const r=()=>{const[n,e]=d.useReducer(u,[]);return t.jsxs("div",{children:[t.jsx("button",{onClick:()=>e({type:"add",item:{id:1,name:"Apple"}}),children:"Add Apple"}),t.jsx("ul",{children:n.map(s=>t.jsxs("li",{children:[s.name," ",t.jsx("button",{onClick:()=>e({type:"remove",id:s.id}),children:"Remove"})]},s.id))})]})};r.__docgenInfo={description:"",methods:[],displayName:"UseReducerExample"};const m={title:"Hooks/UseReducerExample",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},a=()=>t.jsx(r,{});a.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,o,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"() => <UseReducerExample />",...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const h=["Default"];export{a as Default,h as __namedExportsOrder,m as default};
