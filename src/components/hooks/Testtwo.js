import React, { useContext } from "react";
import { createProvider } from "./Testone";
import HookUseContext from "./HookUseContext";
import DataFetchingOne from "./DataFetchingOne";
import DataFetchingTwoByReducer from "./DataFetchingTwoByReducer";
export const UserContext = React.createContext();
export const UserChannel = React.createContext();
function Testtwo() {
  const arrayElem = useContext(createProvider);
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const doubled = numbers.map((number) => number * 2);
  return (
    <div>
      <UserContext.Provider value={"Bishwajeet Samal"}>
        <UserChannel.Provider value="BishwaRano">
          <HookUseContext />
        </UserChannel.Provider>
      </UserContext.Provider>
      {doubled + " "}
      <hr />
      <div>
        <h2>This is by using State</h2>
        <DataFetchingOne />
        <hr />
        <h2>This is by using useReducer()</h2>
        <DataFetchingTwoByReducer />
      </div>
    </div>
  );
}

export default Testtwo;
