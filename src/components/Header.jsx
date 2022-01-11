import React from "react";

export default function Header(props) {
  return (
    <header
      style={
        props.mode
          ? {}
          : {
              background: "hsl(209, 23%, 22%)",
              boxShadow: 0,
            }
      }
    >
      <h4>Where in the world?</h4>
      <div className="switch-mode">
        <i className="fas fa-moon"></i>
        <button
          className="mode"
          onClick={props.changeMode}
          style={
            props.mode
              ? {}
              : {
                  color: "hsl(0, 0%, 98%)",
                }
          }
        >
          Dark Mode
        </button>
      </div>
    </header>
  );
}
