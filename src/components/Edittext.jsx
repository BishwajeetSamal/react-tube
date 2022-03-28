import React, { useState } from "react";
import Makebutton from "./Makebutton";

function Edittext() {
  const [text, setText] = useState();
  function clicktoUpper() {
    setText(text.toUpperCase());
  }

  function clicktoLower() {
    setText(text.toLowerCase());
  }

  function clearText() {
    setText("");
  }

  function handleOnChange(e) {
    console.log("Changing");
    setText(e.target.value);
  }

  return (
    <div>
      <textarea
        name=""
        id=""
        cols="100"
        rows="15"
        style={{
          marginLeft: "25%",
          padding: "1rem",
        }}
        placeholder="Enter text here..."
        value={text}
        onChange={handleOnChange}
      >
        {text}
      </textarea>

      <div
        style={{
          display: "flex",
          marginLeft: "22rem",
        }}
      >
        <Makebutton name="Convert to Uppercase" data={clicktoUpper} />
        <div style={{ marginLeft: "8px" }}>
          <Makebutton name="Convert to Lowercase" data={clicktoLower} />
        </div>
        <div style={{ marginLeft: "28px" }}>
          <Makebutton name="Clear Text" data={clearText} />
        </div>
      </div>
    </div>
  );
}

export default Edittext;
