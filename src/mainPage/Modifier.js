import React from "react"
import "./modifier.css"

export default function Modifier(props) {
  return (
    <div>
      <form action="/action_page.php" method="get">
        <label for="strength">
          <input
            type="radio"
            name="radio"
            value={`${props.user}:str`}
            onChange={props.handleChange}
          />{" "}
          Str
        </label>

        <label for="dexterity">
          <input
            type="radio"
            name="radio"
            value={`${props.user}:dex`}
            onChange={props.handleChange}
          />{" "}
          Dex
        </label>

        <label for="constitution">
          <input
            type="radio"
            name="radio"
            value={`${props.user}:con`}
            onChange={props.handleChange}
          />{" "}
          Con
        </label>

        <label for="intelligence">
          <input
            type="radio"
            name="radio"
            value={`${props.user}:int`}
            onChange={props.handleChange}
          />{" "}
          Int
        </label>

        <label for="wisdom">
          <input
            type="radio"
            name="radio"
            value={`${props.user}:wis`}
            onChange={props.handleChange}
          />{" "}
          Wis
        </label>

        <label for="charisma">
          <input
            type="radio"
            name="radio"
            value={`${props.user}:char`}
            onChange={props.handleChange}
          />
          Char
        </label>
        <label for="none">
          <input
            type="radio"
            name="radio"
            value={`${props.user}:0`}
            onChange={props.handleChange}
          />
          None
        </label>
      </form>
    </div>
  )
}
