import React from "react";
import Dice from "./Dice";
import './Users.css'

export default function Users(props) {
  return (
    <div id="parent-user-group">
      <p>{props.user}</p>
      <Dice className="user-group" user={props.user} random={props.random}></Dice>
    </div>
  );
}
