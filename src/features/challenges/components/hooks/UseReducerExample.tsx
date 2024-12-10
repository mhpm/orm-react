//* UseReducerExample Component: Demonstrates the use of the `useReducer` Hook

//* Technical Explanation:
// `useReducer` is an alternative to `useState` for managing complex state logic. It uses a reducer function that takes the current state and an action to return the next state.

//* Easier Explanation:
// `useReducer` is like a smarter version of `useState` for managing more complicated updates, such as a shopping cart.

//* When to Use:
// Use `useReducer` for complex state logic with multiple actions, like forms or lists.

import React, { useReducer } from 'react';

interface CartItem {
  id: number;
  name: string;
}

type Action = { type: 'add'; item: CartItem } | { type: 'remove'; id: number };

function cartReducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case 'add':
      return [...state, action.item];
    case 'remove':
      return state.filter((item) => item.id !== action.id);
    default:
      throw new Error('Unknown action');
  }
}

const UseReducerExample: React.FC = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div>
      <button
        onClick={() =>
          dispatch({ type: 'add', item: { id: 1, name: 'Apple' } })
        }
      >
        Add Apple
      </button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => dispatch({ type: 'remove', id: item.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducerExample;
