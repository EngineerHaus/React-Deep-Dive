import React, { useReducer } from "react";

let _count;
let requestRerender = () => {};

function useState3(initialValue) {
  if (_count === undefined) {
    _count = initialValue;
  }

  const setValue = (newValue) => {
    _count = newValue;
    requestRerender();
  };

  return [_count, setValue];
}

export default function MyComponent3() {
  const [, force] = useReducer((x) => x + 1, 0);
  requestRerender = () => force();

  const [countA, setCountA] = useState3(0);
  const [countB, setCountB] = useState3(0);

  return (
    <div>
      <span>{countA}</span>
      <br />
      <button onClick={() => setCountA(countA + 1)}>Increment A</button>
      <br />
      <span>{countB}</span>
      <br />
      <button onClick={() => setCountB(countB + 1)}>Increment B</button>
    </div>
  );
}
