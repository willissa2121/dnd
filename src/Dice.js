import React from "react";

const diceVal = [4, 6, 8, 10, 20];
const colorVal = ["danger", "warning", "success", "primary", "info"];

export default function Dice(props) {
  return (
    <div>
      {diceVal.map((val, iteration) => (
        <button
          className={`btn btn-${colorVal[iteration]} mr-1 ml-1`}
          onClick={() => {
            props.random(val, props.user);
          }}
          value={val}
        >
          {val}
        </button>
      ))}
    </div>
  );
}
