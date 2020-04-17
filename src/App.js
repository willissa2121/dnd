import React from "react";
import "./mainPage/Users.js";
import "./App.css";
import Main from "./mainPage/Main";
import Admin from "./adminPage/Admin";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}
