import React from "react";
import HookUseContext from "./components/hooks/HookUseContext";
import NavbarPage from "./components/NavbarPage";
export const UserContext = React.createContext();
export const UserChannel = React.createContext();
function App() {
  return (
    <>
      <NavbarPage />

      <UserContext.Provider value={"Bishwajeet Samal"}>
        <UserChannel.Provider value="BishwaRano">
          <HookUseContext />
        </UserChannel.Provider>
      </UserContext.Provider>
    </>
  );
}
export default App;
