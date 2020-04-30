import React from "react";
import Dice from "./Dice";
import Modifier from "./Modifier";
import "./Users.css";

export default function Users(props) {
  const userDataArray = [];
  props.data.map((data) => {
    if (props.user === data.roller) {
      const {
        roller,
        val,
        maxRoll,
        modifierValue,
        modifierClass,
        createdAt,
      } = data;
      if (modifierValue !== null) {
        userDataArray.push({
          roller,
          val,
          maxRoll,
          modifierValue,
          modifierClass,
          createdAt,
        });
      } else {
        userDataArray.push({
          roller,
          val,
          maxRoll,
          modifierValue: 0,
          modifierClass: "no mod",
          createdAt,
        });
      }
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
      <Modifier user={props.user} handleChange={props.handleChange}></Modifier>

      <img
        alt="user-pic"
        id="parent-user-group"
        src={require(`../public/images/${props.image}.png`)}
      />
      {userDataArray.map((data) => (
        <div className="row justify-content-center">
          <p className="col-md-12" id="roll-history">
            <p id="rollRoller">
              {" "}
              <span>
                {data.val} / {data.maxRoll} {data.modifierClass} +{" "}
                {data.modifierValue} ={data.val + data.modifierValue}
              </span>
            </p>
          </p>
        </div>
      ))}
    </div>
  );
}
