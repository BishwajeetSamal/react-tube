import React from "react";

function Makebutton(props) {
  return (
    <div>
      <button
        style={{
          marginLeft: "25%",
          color: "white",
          backgroundColor: "#007bff",
          cursor: "pointer",
          padding: "1rem",
          fontSize: "1rem",
          width: "100%",
          borderStyle: "none",
          borderRadius: "16px",
        }}
        onClick={props.data}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Makebutton;
