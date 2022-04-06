import React from "react";
import { Routes, Route } from "react-router-dom";
import Home1 from "./Home1";
import About from "./About";
import NavbarOne from "./NavbarOne";
function mainApp() {
  return (
    <div>
      <NavbarOne />
      <Routes>
        <Route path="/home" element={<Home1 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default mainApp;
