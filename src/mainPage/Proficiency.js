import React from "react"
import "./modifier.css"

export default function Proficiency(props) {
  return (
    <div className="mt-2">
      <form action="/action_page.php" method="get">
        <label for="strength">
          <input
            type="radio"
            name="radio"
            value={`${props.user}:prof`}
            onChange={props.handleChange}
          />{" "}
          Prof
        </label>
        <label for="strength">
          <input
            type="radio"
            name="radio"
            value={`${props.user}:none`}
            onChange={props.handleChange}
          />{" "}
          None
        </label>

        
      </form>
    </div>
  )
}
