import React from "react";
import NavbarPage from "./components/NavbarPage";
export const UserContext = React.createContext();
export const UserChannel = React.createContext();
function App() {
  return (
    <>
      <NavbarPage />

      {/* To see the useContext() hook then uncomment the code below */}
      {/* ========================================================== */}
      {/* <UserContext.Provider value={"Bishwajeet Samal"}>
        <UserChannel.Provider value="BishwaRano">
          <HookUseContext />
        </UserChannel.Provider>
      </UserContext.Provider> */}
    </>
  );
}
export default App;
