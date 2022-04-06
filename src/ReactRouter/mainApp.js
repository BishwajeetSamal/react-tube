import React from "react";
import { Routes, Route } from "react-router-dom";
import Home1 from "./Home1";
import About from "./About";
import NavbarOne from "./NavbarOne";
import OrderSummary from "./OrderSummary";
function mainApp() {
  return (
    <div>
      <NavbarOne />
      <Routes>
        <Route path="/home" element={<Home1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </div>
  );
}

export default mainApp;
