import React from "react";
import Dice from "./Dice";
import "./Users.css";

export default function Users(props) {
  return (
    <div>
      <p>{props.user}</p>
      <Dice
        className="user-group"
        user={props.user}
        random={props.random}
      ></Dice>

      <img alt="user-pic"  id="parent-user-group" src={require(`./public/images/${props.image}.png`)}/>
    </div>
  );
}
