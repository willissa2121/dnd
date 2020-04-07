import React from "react";

const diceVal = [4, 6, 8, 10, 20];

export default function Dice(props) {
  return (
    <div>
      {diceVal.map((val) => (
        <button
          className="btn btn-outline-success"
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
