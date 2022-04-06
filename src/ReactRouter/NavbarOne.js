import React from "react";
import { NavLink } from "react-router-dom";
function NavbarOne() {
  return (
    <div>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
}

export default NavbarOne;
