import "./App.css";

import UseState from "./pages/UseState";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="use-state">useState</Link>
          </li>
          <li>
            <Link to="use-effect">useEffect</Link>
          </li>

          <li>
            <Link to="use-context">useContext</Link>
          </li>

          <li>
            <Link to="use-reducer">useReducer</Link>
          </li>

          <li>
            <Link to="use-callback">useCallback</Link>
          </li>

          <li>
            <Link to="use-memo">useMemo</Link>
          </li>

          <li>
            <Link to="use-ref">useRef</Link>
          </li>

          <li>
            <Link to="use-imperative-handle">useImperativeHandle</Link>
          </li>

          <li>
            <Link to="use-layout-effect">useLayoutEffect</Link>
          </li>

          <li>
            <Link to="use-debug-value">useDebugValue</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/use-state">
            <UseState />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
