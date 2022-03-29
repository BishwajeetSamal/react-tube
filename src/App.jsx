import React from "react";
import Navbar from "./components/Navbar";
import Edittext from "./components/Edittext";
import Profile from "./Profile";
import Profile1 from "./components/Profile1";
import DriveCar from "./components/ImportantConcept";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Link
          style={{
            textDecoration: "none",
            marginRight: "1rem",
            color: "grey",
            fontSize: "20px",
          }}
          to="/"
        >
          Navbar
        </Link>
        <Link
          style={{
            textDecoration: "none",
            marginRight: "1rem",
            color: "grey",
            fontSize: "20px",
          }}
          to="/Edittext"
        >
          Edittext
        </Link>
        <Link
          style={{
            textDecoration: "none",
            marginRight: "1rem",
            color: "grey",
            fontSize: "20px",
          }}
          to="/Profile"
        >
          Profile
        </Link>
        <Link
          style={{
            textDecoration: "none",
            marginRight: "1rem",
            color: "grey",
            fontSize: "20px",
          }}
          to="/Profile1"
        >
          Profile1
        </Link>
        <Link
          style={{
            textDecoration: "none",
            marginRight: "1rem",
            color: "grey",
            fontSize: "20px",
          }}
          to="/ImportantConcept"
        >
          Drive-car
        </Link>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/Edittext" element={<Edittext />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Profile1" element={<Profile1 />} />
          <Route path="/ImportantConcept" element={<DriveCar />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
