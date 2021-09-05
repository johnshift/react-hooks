import { useLayoutEffect, useEffect } from "react";

// Note:
//  - useLayoutEffect is always called before render
//  - useEffect is called after render
const UseLayoutEffect = () => {
  useLayoutEffect(() => {
    console.log("UseLayoutEffect");
  }, []);

  useEffect(() => {
    console.log("UseEffect");
  }, []);

  return (
    <div>
      <h1>todo</h1>
    </div>
  );
};

export default UseLayoutEffect;
