import React from "react";
import Makebutton from "./Makebutton";

function Edittext() {
  return (
    <div>
      <textarea
        name=""
        id=""
        cols="100"
        rows="15"
        style={{ marginLeft: "25%" }}
      ></textarea>

      <div
        style={{
          display: "flex",
          marginLeft: "22rem",
        }}
      >
        <Makebutton name="Convert to Uppercase" />
        <div style={{ marginLeft: "8px" }}>
          <Makebutton name="Convert to Lowercase" />
        </div>
      </div>
    </div>
  );
}

export default Edittext;
