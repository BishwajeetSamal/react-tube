import React from "react";
import CardComponent from "./CardComponent";

function Home(props) {
  var ImgAddr = process.env.PUBLIC_URL + "/images/train.jpeg";
  return (
    <div style={{ padding: "10px", display: "flex" }}>
      <CardComponent
        link="https://www.irctc.co.in/nget/train-search"
        buttonName="Book Ticket"
        name="Bishwajeet Samal"
        img={ImgAddr}
      />
      <CardComponent
        link="https://reactjs.org/"
        buttonName="React"
        name="Bishwajeet Samal"
        img="https://image.shutterstock.com/image-vector/software-web-development-programming-concept-260nw-1122339353.jpg"
      />
      <CardComponent
        link="https://angular.io/"
        buttonName="Angular"
        name="Arjun Ojha"
        img="https://thumbs.dreamstime.com/z/character-writing-software-programmer-developing-website-device-concept-program-developer-creating-computer-desktop-123158877.jpg"
      />
      <CardComponent
        link="https://go.dev/"
        buttonName="Golang"
        name="Priyambada Swain"
        img="https://st4.depositphotos.com/4230659/22501/v/1600/depositphotos_225010992-stock-illustration-isometric-developing-programming-and-coding.jpg"
      />
      <CardComponent
        link="https://www.php.net/"
        buttonName="PHP"
        name="Ashish Jena"
        img="https://i.pinimg.com/originals/1f/d2/c1/1fd2c1f4b361825bc07c8a46b87d5467.jpg"
      />
    </div>
  );
}

export default Home;
