import React from "react";
import "./Header.css"
export default function Header() {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">DNDizzle shit tier dice roller</h1>
        <p className="lead">Ben Shapiro</p>

        <p className="lead">
          <a target="_blank" className="btn btn-primary btn-lg" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" role="button">
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
}
