let counter = 0;

const MyComponent = () => {
  const handleClick = () => {
    counter += 1;
  };

  return (
    <div>
      <span>{counter}</span>
      <br />
      <button
        onClick={() => {
          handleClick();
          render();
        }}
      >
        Increment
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");

const render = () => {
  ReactDOM.render(<MyComponent />, rootElement);
};

render();
