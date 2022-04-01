import React, { useReducer } from "react";
import Makebutton from "../Makebutton";
//  import UseReducer1 from "./UseReducer1";

export const CountContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
      break;

    case "decrement":
      return state - 1;
      break;

    case "reset":
      return initialState;
      break;

    default:
      return state;
  }
};

function MultipleUseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      {/* <CountContext.Provider
        value={{ countValue: count, countDispatch: dispatch }}
      >
        <UseReducer1 />
      </CountContext.Provider> */}
      <div
        style={{
          width: "35rem",
          padding: "2rem 1rem",

          display: "flex",
        }}
      >
        <div>
          <h2>
            <p>First State/</p>
          </h2>
        </div>
        <div style={{ marginTop: "1rem" }}>Count : {count}</div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton name="Reset" data={() => dispatch("reset")} />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton name="+" data={() => dispatch("increment")} />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton name="-" data={() => dispatch("decrement")} />
        </div>
      </div>
      <div
        style={{
          width: "35rem",
          padding: "2rem 1rem",

          display: "flex",
        }}
      >
        <div>
          <h2>
            <p>Anathor State/</p>
          </h2>
        </div>
        <div style={{ marginTop: "1rem" }}>CountTwo : {countTwo}</div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton name="Reset" data={() => dispatchTwo("reset")} />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton name="+" data={() => dispatchTwo("increment")} />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton name="-" data={() => dispatchTwo("decrement")} />
        </div>
      </div>
    </div>
  );
}

export default MultipleUseReducer;
