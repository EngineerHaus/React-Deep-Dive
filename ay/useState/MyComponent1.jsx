let counter = 0;

const MyComponent1 = () => {
  const handleClick = () => {
    counter += 1;
  };

  return (
    <div>
      <h1>handleClick</h1>
      <span>{counter}</span>
      <br />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default MyComponent1;
