// import { useState } from "react";
import { useReducer } from "react";

// Notes:
//  - if you try to mutate more than one state,
//    always try to utilize useReducer
//  - this will always declutter your const declarations

const UseReducer = () => {
  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);

  // // clicking the button will increment count,
  // // and at the same time toggle showText value
  // return (
  //   <div>
  //     <h1>count: {count}</h1>
  //     <br />
  //     <br />
  //     <button
  //       onClick={() => {
  //         setCount(count + 1);
  //         setShowText(!showText);
  //       }}
  //     >
  //       click here
  //     </button>

  //     {showText && <p>This text is shown</p>}
  //   </div>
  // );

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1, showText: state.showText };
      case "toggleShowText":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>count: {state.count}</h1>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({ type: "increment" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        click here
      </button>

      {state.showText && <p>This text is shown</p>}
    </div>
  );
};

export default UseReducer;
