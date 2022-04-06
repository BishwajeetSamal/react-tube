import React from "react";
import Testtwo from "./Testtwo";
export const createProvider = React.createContext();

function Testone() {
  return (
    <div>
      {/* To see the useContext() hook then uncomment the code below */}
      {/* ========================================================== */}
      <createProvider value={[1, 2, 3, 4, 5, 6, 7]}>
        <Testtwo />
      </createProvider>
    </div>
  );
}

export default Testone;
