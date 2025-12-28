import React, { useReducer } from "react";

let callIndex = -1;
let counts = [];
let requestRerender = () => {};

function useState4(initialValue) {
  callIndex += 1;
  const currentIndex = callIndex;

  if (counts[currentIndex] === undefined) {
    counts[currentIndex] = initialValue;
  }

  const setValue = (newValue) => {
    counts[currentIndex] = newValue;
    requestRerender();
  };

  return [counts[currentIndex], setValue];
}

export default function MyComponent4() {
  const [, force] = useReducer((x) => x + 1, 0);
  requestRerender = () => {
    callIndex = -1;
    force();
  };

  const [countA, setCountA] = useState4(0);
  const [countB, setCountB] = useState4(0);

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
