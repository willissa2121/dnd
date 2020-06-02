import React from "react";

export default function Health(props) {
  return (
    <div class="input-group mb-3 col-md-6">
      <input
        type="number"
        class="form-control"
        placeholder={props.playerHealth[`${props.user}`]}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        name={`${props.user}`}
        onChange={props.handleHealthChange}
      />
      <div class="input-group-append">
        <button
          aria-describedby="basic-addon2"
          name={`${props.user}`}
          onClick={props.submitHealth}
          value={props.playerHealth[`${props.user}`]}
          class="btn btn-outline-success"
          type="button"
        >
          Set
        </button>
      </div>
    </div>
  );
}
