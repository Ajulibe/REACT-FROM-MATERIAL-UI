import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Switch, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import FormPage from "./components/FormPage";
import Navbar from "./components/Navbar";
import history from "./history";
import { Router } from "react-router-dom";

class Complete extends Component {
  state = {};
  // parentloggedIn() {
  //   this.setState({ authenticated: true });
  // }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <FormPage />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>

          <Route exact path="/navbar">
            <Navbar />
          </Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<Complete />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
