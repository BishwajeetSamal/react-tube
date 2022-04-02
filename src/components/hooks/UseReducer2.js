import React, { useReducer } from "react";
import Makebutton from "../Makebutton";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + 1 };

    case "decrement":
      return { ...state, firstCounter: state.firstCounter - 1 };

    case "reset":
      return initialState;

    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };

    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    default:
      return state;
  }
};

function UseReducer2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div
        style={{
          width: "56rem",
          padding: "2rem 1rem",

          display: "flex",
        }}
      >
        <div>
          <h2>
            <p>State as an Object.</p>
          </h2>
        </div>
        <div style={{ marginTop: "1rem" }}>
          Count1 -: {count.firstCounter} || Count2-: {count.secondCounter}{" "}
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton name="Reset" data={() => dispatch({ type: "reset" })} />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton
            name="+"
            data={() => dispatch({ type: "increment", value: 1 })}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton
            name="-"
            data={() => dispatch({ type: "decrement", value: 1 })}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton
            name="+2"
            data={() => dispatch({ type: "increment2", value: 2 })}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton
            name="-2"
            data={() => dispatch({ type: "decrement2", value: 2 })}
          />
        </div>
      </div>
    </div>
  );
}

export default UseReducer2;
