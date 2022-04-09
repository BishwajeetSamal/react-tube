import React from "react";
import { Provider } from "react-redux";
import HookCakeContainer from "./cake/HookCakeContainer";
import CakeContainer from "./CakeContainer";
import store from "./store";
function RenderRedux() {
  return (
    <Provider store={store}>
      {(console.log("store Page"), console.log(store))}
      <CakeContainer />
      <HookCakeContainer />
    </Provider>
  );
}

export default RenderRedux;
