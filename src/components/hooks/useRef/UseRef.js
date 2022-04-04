import React, { useEffect, useRef } from "react";
import ClassTimer from "./classTimer";
import FunctionalTimer from "./FunctionalTimer";

function UseRef() {
  const inputRef = useRef(null);
  useEffect(() => {
    //focus the input element
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "1rem" }}>
      <input ref={inputRef} type="text" />
      <hr />
      <h2>Class Timer</h2>
      <div>
        <ClassTimer />
      </div>
      <hr />
      <h2>Functional Timer</h2>
      <div>
        <FunctionalTimer />
      </div>
    </div>
  );
}

export default UseRef;
