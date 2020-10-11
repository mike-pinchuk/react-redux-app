import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import store from "./store/store";
import WithoutReduxPage from "./WithoutReduxPage";
// import WithReduxPage from "./WithReduxPage";
import WithReduxPage from "./store/wrappedWithReduxPage";
import Counter from './store/wrappedCounter'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Loading via Local State</Link>
            </li>
            <li>
              <Link to="/loading_redux">Loading via Redux</Link>
            </li>
            <li>
              <Link to="/counter_redux">Counter with Redux</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/counter_redux">
            <Provider store={store}>
              <Counter />
            </Provider>
          </Route>
          <Route path="/loading_redux">
            <Provider store={store}>
              <WithReduxPage />
            </Provider>
          </Route>
          <Route path="/">
            <WithoutReduxPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
