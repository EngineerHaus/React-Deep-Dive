import { myUseState } from '../src/myUseState';

const Form = () => {
  const [input, setInput] = myUseState('');

  return (
    <div>
      <h1>useState v4</h1>
      <span>{input}</span>
      <br />
      <input
        type="text"
        value={input || ''}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
};

export default Form;
