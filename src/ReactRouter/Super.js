import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainApp from "./mainApp";
function Super() {
  return (
    <div>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </div>
  );
}

export default Super;
