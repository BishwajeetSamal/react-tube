import React from "react";
import { Link, Outlet } from "react-router-dom";
function Products() {
  return (
    <div>
      <h1>Products</h1>
      <input type="search" placeholder="Search products" />
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Products;
