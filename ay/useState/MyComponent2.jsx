let _count;

const useState = (initialValue) => {
  if (_count === undefined) {
    _count = initialValue;
  }

  const setValue = (newValue) => {
    _count = newValue;
  };

  return [_count, setValue];
};

const MyComponent2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useState v1</h1>
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

export default MyComponent2;
