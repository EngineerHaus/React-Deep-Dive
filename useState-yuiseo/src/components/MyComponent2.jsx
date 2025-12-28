import React, { useReducer } from "react";

let _count;
let requestRerender = () => {};

function useState2(initialValue) {
  if (_count === undefined) {
    _count = initialValue;
  }

  const setValue = (newValue) => {
    _count = newValue;
    requestRerender();
  };

  return [_count, setValue];
}

export default function MyComponent2() {
  const [, force] = useReducer((x) => x + 1, 0);
  requestRerender = () => force();

  const [count, setCount] = useState2(0);

  return (
    <div>
      <span>{count}</span>
      <br />
      <button onClick={() => setCount(count + 1)}>Increment A</button>
    </div>
  );
}
