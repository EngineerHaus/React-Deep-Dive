let callIndex = -1;

let _counts = [];

const useState = (initialValue) => {
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

const MyComponent = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <div>
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

const rootElement = document.getElementById("root");

const render = () => {
  callIndex = -1;
  ReactDOM.render(<MyComponent />, rootElement);
};

render();
