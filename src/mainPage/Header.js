import React from "react";
import "./Header.css";
export default function Header(props) {
  const classID = props.update ? "updateText" : "";
  return (
    <div>
      <div className="jumbotron">
        <h2 className="lead">Most Recent Roll</h2>
        <div id="flex">
          <h1>Previous Nat 1 : {props.previousNat1}</h1>

          <p id={classID} className="display-4">
            {props.recentRoll.roller} rolled a {props.recentRoll.val}
          </p>
          <h1>Previous Nat 20 : {props.previousNat20}</h1>
        </div>
      </div>
    </div>
  );
}
