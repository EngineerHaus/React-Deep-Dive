import React, { useReducer } from "react";

let callIndex = -1;
let counts = [];
let requestRerender = () => {};

function useState5(initialValue) {
  callIndex += 1;
  const currentIndex = callIndex;

  if (counts[currentIndex] === undefined) {
    counts[currentIndex] = typeof initialValue === 'function' ? initialValue() : initialValue;
  }

  const setValue = (nextValueOrUpdater) => {
    const prev = counts[currentIndex];
    const next =
      typeof nextValueOrUpdater === "function"
        ? nextValueOrUpdater(prev)
        : nextValueOrUpdater;
  
    if (Object.is(prev, next)) return;
    counts[currentIndex] = next;
    requestRerender();
  };

  return [counts[currentIndex], setValue];
}

export default function MyComponent5() {
  const [, force] = useReducer((x) => x + 1, 0);
  requestRerender = () => {
    callIndex = -1;
    force();
  };

  const [countA, setCountA] = useState5(0);
  const [countB, setCountB] = useState5(0);

  console.log(countA, countB);

  return (
    <div>
      <span>{countA}</span>
      <br />
      <button onClick={() => {
        setCountA((v) => v + 1);
        setCountA((v) => v + 1);
      }}>Increment A x2 (batched)</button>
      <br />
      <span>{countB}</span>
      <br />
      <button onClick={() => setCountB(countB + 1)}>Increment B</button>
    </div>
  );
}
