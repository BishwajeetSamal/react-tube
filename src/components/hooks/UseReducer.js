import React from "react";
import MultipleUseReducer from "./MultipleUseReducer";

import UseReducer2 from "./UseReducer2";

function UseReducer() {
  return (
    <div>
      {/* <div>
        <UseReducer1 />
      </div> */}
      <div>
        <hr />
        <UseReducer2 />
      </div>
      <div>
        <hr />
        <MultipleUseReducer />
      </div>
    </div>
  );
}

export default UseReducer;
