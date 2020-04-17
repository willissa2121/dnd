import React from "react";
import "./Header.css";
export default function Header(props) {
  const classID = props.update ? "updateText" : "";
  return (
    <div>
      <div className="jumbotron">
        <h2 className="lead">Most Recent Roll</h2>
        <p id={classID} className="display-4">
          {props.recentRoll.roller} rolled a {props.recentRoll.val}
        </p>
      </div>
    </div>
  );
}
