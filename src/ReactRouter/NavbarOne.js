import React from "react";
import { NavLink } from "react-router-dom";
function NavbarOne() {
  const navStyleLinks = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "lightseagreen" : "",
    };
  };
  return (
    <div>
      <nav className="primary-nav">
        <NavLink style={navStyleLinks} to="/home">
          Home
        </NavLink>
        <NavLink style={navStyleLinks} to="/about">
          About
        </NavLink>
        <NavLink style={navStyleLinks} to="/products">
          Products
        </NavLink>
      </nav>
    </div>
  );
}

export default NavbarOne;
