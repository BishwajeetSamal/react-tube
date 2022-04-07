import React from "react";
import TestFuncHoc from "./TestFuncHoc";
function FunctionalCounter(props) {
  return (
    <div>
      <button onClick={props.incrementCount}>
        {props.name} Clicked {props.count} times
      </button>
      {props.class}
    </div>
  );
}

export default TestFuncHoc(FunctionalCounter);
