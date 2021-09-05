import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const [text_input, setTextInput] = useState("");
  const changeText = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div>
      <p>count: {count}</p>
      <br />
      <button onClick={increment}>increment</button>
      <br />
      <br />
      <input placeholder="enter something ..." onChange={changeText} />
      <p>text_input: {text_input}</p>
      <br />
      <br />
    </div>
  );
};

export default UseState;
