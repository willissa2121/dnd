import React from "react";
import axios from "axios";
import config from "../config/config";
const enemyList = ["demon", "devil", "boss"];

const sendEnemy = (enemy) => {
  axios.post(`https://dnd-server-api.herokuapp.com/sendEnemy`, { enemy }).then((res) => {
    //console.log(res.data)
  });
};

export default function Admin() {
  return (
    <div>
      {enemyList.map((enemy) => (
        <button
          onClick={() => {
            sendEnemy(enemy);
          }}
          className="btn btn-danger"
        >
          spawn {enemy}
        </button>
      ))}
    </div>
  );
}
