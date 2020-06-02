import React from "react";

const diceVal = [4, 6, 8, 10, 12, 20];
const colorVal = ["danger", "warning", "success", "primary", "dark", "info"];

export default function Dice(props) {

  const audio = new Audio(require('../public/sounds/diceSound.mp3'))
  return (
    <div>
      {diceVal.map((val, iteration) => (
        <button
          className={`btn btn-${colorVal[iteration]} mr-1 ml-1`}
          onClick={() => {
            audio.play().then(val=>{
              //console.log('rolled')
            })
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
