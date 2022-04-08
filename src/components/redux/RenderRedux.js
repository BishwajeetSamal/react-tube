import React from "react";
import { Provider } from "react-redux";
import CakeContainer from "./CakeContainer";
import store from "./store";
function RenderRedux() {
  return (
    <Provider store={store}>
      <CakeContainer />
    </Provider>
  );
}

export default RenderRedux;
