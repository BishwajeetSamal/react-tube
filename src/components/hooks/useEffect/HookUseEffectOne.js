import React, { useState, useEffect } from "react";
import HookMouse from "./HookMouse";
function HookUseEffectOne() {
  const [count, setCount] = useState(0);
  //  When we specify useEffect, we are basically requesting REACT to execute the function that is passed as an arguement
  // everytime the component renders. i.e useEffect() runs after every render of the component.
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("UseEffect-Updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <div style={{ margin: "2rem 40rem", display: "flex" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
      </div>

      <div>
        <HookMouse />
      </div>
    </div>
  );
}

export default HookUseEffectOne;
