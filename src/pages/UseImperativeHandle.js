import { useState, useRef, forwardRef, useImperativeHandle } from "react";

// Note:
//  - useImperativeHandle is used on functional components
//    who have methods that needs to be invoked from the outside
//    (where usual passing of functions through props is not possible)

// forwardRef -> allows a functional component to accept ref from parent
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button>Child Button</button>
      {toggle && <p>Toggle</p>}
    </>
  );
});

const UseImperativeHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Parent Button
      </button>
      <br />
      <br />
      <Button ref={buttonRef} />
    </div>
  );
};

export default UseImperativeHandle;
