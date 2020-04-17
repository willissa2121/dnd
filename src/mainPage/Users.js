import React from "react";
import Dice from "./Dice";
import "./Users.css";

export default function Users(props) {
  const userDataArray = [];
  props.data.map((data) => {
    if (props.user === data.roller) {
      const { roller, val, createdAt } = data;
      userDataArray.push({ roller, val, createdAt });
    }
  });
  return (
    <div>
      <p>{props.user}</p>
      <Dice
        className="user-group"
        user={props.user}
        random={props.random}
      ></Dice>

      <img
        alt="user-pic"
        id="parent-user-group"
        src={require(`../public/images/${props.image}.png`)}
      />
      {userDataArray.map((data) => (
        <div className="row justify-content-center">
          <p className="col-md-12" id="roll-history">
            <p id="rollVal">{data.roller}: </p>
            <p id="rollRoller"> {data.val}</p>
          </p>
        </div>
      ))}
    </div>
  );
}
