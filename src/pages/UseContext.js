import { useState, createContext, useContext } from "react";

// const User = ({ username }) => {
//   return (
//     <div>
//       <h1>User: {username}</h1>
//     </div>
//   );
// };

// const Login = ({ setUsername }) => {
//   return (
//     <div>
//       <input
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Type username ..."
//       />
//     </div>
//   );
// };

const AppContext = createContext(null);

const User = () => {
  const { username } = useContext(AppContext);

  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
};

const Login = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Type username ..."
      />
    </div>
  );
};

const UseContext = () => {
  const [username, setUsername] = useState("");

  return (
    // <div>
    //   <br />
    //   <br />
    //   <Login setUsername={setUsername} />
    //   <br />
    //   <br />
    //   <br />
    //   <User username={username} />
    // </div>

    <AppContext.Provider value={{ username, setUsername }}>
      <br />
      <br />
      <Login />
      <br />
      <br />
      <br />
      <User />
    </AppContext.Provider>
  );
};

export default UseContext;
