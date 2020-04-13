import React from "react";
import "./Header.css";
export default function Header(props) {
  const classID = props.update ? "updateText" : "";
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">DNDizzle shit tier dice roller</h1>
        <p className="lead">Most Recent Roll</p>
        <p id={classID} className="display-5">
          {props.recentRoll.roller} rolled a {props.recentRoll.val}
        </p>
      </div>
    </div>
  );
}
