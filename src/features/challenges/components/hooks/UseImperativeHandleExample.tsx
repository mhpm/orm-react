//* UseImperativeHandleExample: Demonstrates the use of the `useImperativeHandle` Hook

//* Technical Explanation:
// `useImperativeHandle` customizes the instance value exposed by `ref`. It is useful when you want to control what a parent can do with a child component.

//* Easier Explanation:
// `useImperativeHandle` allows you to expose specific methods from a child component to a parent component.

//* When to Use:
// Use `useImperativeHandle` when you need to expose or control a child’s functionality from its parent.

import React, { useRef, useImperativeHandle, forwardRef } from 'react';

interface ImperativeHandleProps {}

export interface ImperativeHandleRef {
  focus: () => void;
}

const ImperativeComponent = forwardRef<
  ImperativeHandleRef,
  ImperativeHandleProps
>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  return <input className="p-2" ref={inputRef} type="text" />;
});

const UseImperativeHandleExample: React.FC = () => {
  const ref = useRef<ImperativeHandleRef>(null);

  return (
    <div>
      Parent:
      <button className="button" onClick={() => ref.current?.focus()}>
        Focus Child Input
      </button>
      <br />
      <br />
      Child:
      <ImperativeComponent ref={ref} />
    </div>
  );
};

export default UseImperativeHandleExample;
