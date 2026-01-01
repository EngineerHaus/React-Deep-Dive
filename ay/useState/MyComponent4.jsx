import { myUseState } from '../src/myUseState';

const MyComponent4 = () => {
  const [countA, setCountA] = myUseState(0);
  const [countB, setCountB] = myUseState(0);

  return (
    <div>
      <h1>useState v3</h1>
      <span>{countA}</span>
      <br />
      <button
        onClick={() => {
          setCountA(countA + 1);
        }}
      >
        Increment A
      </button>
      <br />
      <span>{countB}</span>
      <br />
      <button
        onClick={() => {
          setCountB(countB + 1);
        }}
      >
        Increment B
      </button>
    </div>
  );
};

export default MyComponent4;
