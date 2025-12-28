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

const MyComponent3 = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <div>
      <h1>useState v2</h1>
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

export default MyComponent3;
