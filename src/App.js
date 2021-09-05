import "./App.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import UseState from "./pages/UseState";
import UseReducer from "./pages/UseReducer";
import UseEffect from "./pages/UseEffect";
import UseRef from "./pages/UseRef";
import UseLayoutEffect from "./pages/UseLayoutEffect";
import UseImperativeHandle from "./pages/UseImperativeHandle";
import UseContext from "./pages/UseContext";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ul>
              <li>
                <Link to="use-state">useState</Link>
              </li>
              <li>
                <Link to="use-reducer">useReducer</Link>
              </li>
              <li>
                <Link to="use-effect">useEffect</Link>
              </li>
              <li>
                <Link to="use-ref">useRef</Link>
              </li>
              <li>
                <Link to="use-layout-effect">useLayoutEffect</Link>
              </li>
              <li>
                <Link to="use-imperative-handle">useImperativeHandle</Link>
              </li>
              <li>
                <Link to="use-context">useContext</Link>
              </li>
              <li>
                <Link to="use-callback">useCallback</Link>
              </li>
              <li>
                <Link to="use-memo">useMemo</Link>
              </li>

              <li>
                <Link to="use-debug-value">useDebugValue</Link>
              </li>
            </ul>
          </Route>
          <Route path="/use-state">
            <UseState />
          </Route>
          <Route path="/use-reducer">
            <UseReducer />
          </Route>
          <Route path="/use-effect">
            <UseEffect />
          </Route>
          <Route path="/use-ref">
            <UseRef />
          </Route>
          <Route path="/use-layout-effect">
            <UseLayoutEffect />
          </Route>
          <Route path="/use-imperative-handle">
            <UseImperativeHandle />
          </Route>
          <Route path="/use-context">
            <UseContext />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
