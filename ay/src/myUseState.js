import { render } from './renderer';

let callIndex = -1;

let _counts = [];

export const resetCallIndex = () => {
  callIndex = -1;
};

export const myUseState = (initialValue) => {
  callIndex++;

  const currentCallIndex = callIndex;

  if (_counts[currentCallIndex] === undefined) {
    _counts[currentCallIndex] = initialValue;
  }

  const setValue = (newValue) => {
    _counts[currentCallIndex] = newValue;
    render();
  };

  return [_counts[currentCallIndex], setValue];
};
