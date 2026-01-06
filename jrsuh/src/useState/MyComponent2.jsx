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
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{count}</span>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment A
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");

const render = () => {
  ReactDOM.render(<MyComponent />, rootElement);
};

render();
