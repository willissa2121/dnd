import React from "react";
import "./Header.css";
export default function Header(props) {
  console.log(props)
  if (props.update) {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">DNDizzle shit tier dice roller</h1>
          <p className="lead">Most Recent Roll</p>
          <p id="updateText" className="display-5">
            {props.recentRoll.roller} rolled a {props.recentRoll.val}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">DNDizzle shit tier dice roller</h1>
          <p className="lead">Most Recent Roll</p>
          <p className="display-5">
            {props.recentRoll.roller} rolled a {props.recentRoll.val}
          </p>
        </div>
      </div>
    );
  }
}
