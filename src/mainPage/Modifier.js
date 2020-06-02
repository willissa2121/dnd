import React from "react";
const modArray = ["STR", "DEX", "CON", "WIS", "INT", "CHAR"];
export default function Modifier(props) {
  return (
    <div >
      <form class="form-inline">
        <select onClick={props.handleModChange}
          class="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
        >
          <option value={`${props.user}:none`}  selected>None</option>
          {modArray.map((mod) => (
            <option  value={`${props.user}:${mod}`}>{mod}</option>
          ))}
        </select>
      </form>
    </div>
  );
}
