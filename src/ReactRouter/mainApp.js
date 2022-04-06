import React from "react";
import { Routes, Route } from "react-router-dom";
import Home1 from "./Home1";
import About from "./About";
import NavbarOne from "./NavbarOne";
import OrderSummary from "./OrderSummary";
import NoMatch from "./NoMatch";
import Products from "./Products";
import FeaturedProducts from "./FeaturedProducts";
import NewProducts from "./NewProducts";
import Users from "./Users";
import UserDetails from "./UserDetails";
import Admin from "./Admin";
function mainApp() {
  return (
    <div>
      <NavbarOne />
      <Routes>
        <Route path="/home" element={<Home1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default mainApp;
