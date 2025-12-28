import React, { useReducer } from "react";

let counter = 0;

export default function MyComponent1() {
  const [, force] = useReducer((x) => x + 1, 0);

  const handleClick = () => {
    counter += 1;
    force();
  };

  return (
    <div>
      <span>{counter}</span>
      <br />
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
