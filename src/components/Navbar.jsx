import React from "react";

function Navbar() {
  var name = "Bishwajeet Samal";
  var ImgAddr = process.env.PUBLIC_URL + "/images/train.jpeg";
  return (
    <>
      <h1>{name}</h1>
      <img src={ImgAddr} alt="Train Image" />
    </>
  );
}

export default Navbar;
