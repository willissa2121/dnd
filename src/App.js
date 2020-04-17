import React from "react";
import "./mainPage/Users.js";
import "./App.css";
import Main from "./mainPage/Main";
import Admin from "./adminPage/Admin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/admin" component={Admin} />
      </div>
    </Router>
  );
}
