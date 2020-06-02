import React from "react";
import Dice from "./Dice";
import Proficiency from "./Proficiency";
import "./Users.css";
import Modifier from "./Modifier";
import Health from './Health'
export default function Users(props) {
  const userDataArray = [];
  const styleObj =
    props.user ==
    "01000111 01100001 01101101 01100101 01110010 00100000 01000110 01110101 01100101 01101100"
      ? { fontSize: "6px" }
      : {};
  props.data.map((data) => {
    if (props.user === data.roller) {
      const {
        roller,
        val,
        maxRoll,
        profValue,
        modValue,
        modClass,
        createdAt,
      } = data;
      if (profValue !== null) {
        userDataArray.push({
          roller,
          val,
          maxRoll,
          profValue,
          createdAt,
          modValue,
          modClass,
        });
      } else {
        userDataArray.push({
          roller,
          val,
          maxRoll,
          profValue,
          modValue,
          modClass,
          createdAt,
        });
      }
    }
  });

  return (
    <div>
      <p style={styleObj}>{props.user}</p>
      <div className="row justify-content-center">
      <Health submitHealth={props.submitHealth} playerHealth={props.playerHealth} handleHealthChange={props.handleHealthChange} user={props.user}></Health>
      </div>
 
      <Dice
        className="user-group"
        user={props.user}
        random={props.random}
      ></Dice>
      <div className="row justify-content-center">
        <Modifier
          handleModChange={props.handleModChange}
          user={props.user}
        ></Modifier>
        <Proficiency
          user={props.user}
          handleChange={props.handleChange}
        ></Proficiency>
      </div>
      <div class="input-group mb-3">
        {/* <input
          type="number"
          className={buttonValue}
          aria-describedby="basic-addon2"
          min="0"
        /> */}
        {/* <div className="input-group-append">
          <button
            value={`${buttonValue}-${props.user}`}
            className="btn btn-outline-success"
            type="button"
            onClick={props.updateHealth}
          >
            {buttonText}
          </button>
        </div> */}
      </div>

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
              <span style={{ fontSize: "12px" }}>
                {data.val} / {data.maxRoll} + {data.profValue} prof +{" "}
                {data.modValue} {data.modClass} =
                {data.val + data.profValue + data.modValue}
              </span>
            </p>
          </p>
        </div>
      ))}
    </div>
  );
}
