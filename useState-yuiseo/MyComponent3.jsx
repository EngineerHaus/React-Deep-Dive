let _count;

const useState = (initialValue) => {
  if (_count === undefined) {
    _count = initialValue;
  }

  const setValue = (newValue) => {
    _count = newValue;
    render();
  };

  return [_count, setValue];
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
  ReactDOM.render(<MyComponent />, rootElement);
};

render();
