import React, { useState } from "react";
import Makebutton from "../Makebutton";
function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const IncrementByFive = () => {
    {
      /* we sholud not use direct change on value inside setCount function. We need to perform the chnages through 
previous value which can be accessible from a function inside the setCount Arguement */
    }
    for (let i = 1; i <= 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <div
        style={{
          width: "35rem",
          padding: "2rem 1rem",

          display: "flex",
        }}
      >
        <div style={{ marginTop: "1rem" }}>Count : {count}</div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton name="Reset" data={() => setCount(initialCount)} />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton
            name="+"
            data={() => setCount((prevCount) => prevCount + 1)}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton
            name="-"
            data={() => setCount((prevCount) => prevCount - 1)}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton name="+5" data={IncrementByFive} />
        </div>
      </div>
    </div>
  );
}

export default HookCounterTwo;
