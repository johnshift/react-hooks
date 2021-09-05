import { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
  const [data, setData] = useState("");

  // make sure to include all data you want to watch
  // empty [] means useEffects runs only once
  // non-empty [] means it runs everytime the state changes
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data[0].email);
    });
  }, []);

  return <h1>hello {data}</h1>;
};

export default UseEffect;
