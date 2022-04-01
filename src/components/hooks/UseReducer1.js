import React, { useContext, useReducer } from "react";
import Makebutton from "../Makebutton";
import { CountContext } from "./MultipleUseReducer";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + 1 };
      break;

    case "decrement":
      return { firstCounter: state.firstCounter - 1 };
      break;

    case "reset":
      return initialState;
      break;
    case "increment5":
      return { firstCounter: state.firstCounter + action.value };
      break;

    case "decrement5":
      return { firstCounter: state.firstCounter - action.value };
      break;
    default:
      return state;
  }
};

function UseReducer1() {
  const [countTest, dispatchTest] = useReducer(reducer, initialState);
  const cntCtext = useContext(CountContext);
  return (
    <div>
      <div
        style={{
          width: "50rem",
          padding: "2rem 1rem",

          display: "flex",
        }}
      >
        <div>
          <h2>
            <p>It is made by the help of the object.</p>
          </h2>
        </div>
        <div style={{ marginTop: "1rem" }}>
          Count -: {countTest.firstCounter}
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton
            name="Reset"
            data={() => dispatchTest({ type: "reset" })}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton
            name="+"
            data={() => dispatchTest({ type: "increment", value: 1 })}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton
            name="-"
            data={() => dispatchTest({ type: "decrement", value: 1 })}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton
            name="+5"
            data={() => dispatchTest({ type: "increment5", value: 5 })}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton
            name="-5"
            data={() => dispatchTest({ type: "decrement5", value: 5 })}
          />
        </div>
      </div>
      {/* <div>
        <h1>Seperate Div'S</h1>
        <div style={{ marginTop: "1rem" }}>Count -: {cntCtext.countValue}</div>

        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton
            name="Reset"
            data={() => cntCtext.countDispatch("reset")}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton
            name="+"
            data={() => cntCtext.countDispatch("increment")}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <Makebutton
            name="-"
            data={() => cntCtext.countDispatch("decrement")}
          />
        </div>
      </div> */}
    </div>
  );
}

export default UseReducer1;
