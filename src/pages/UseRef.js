import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const handler = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Juan</h1>
      <br />
      <input type="text" placeholder="e.g ..." ref={inputRef} />
      <br />
      <br />
      <button onClick={handler}>Change name</button>
    </div>
  );
};

export default UseRef;
