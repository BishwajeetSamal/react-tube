import React from "react";
import { Card, Button } from "react-bootstrap";

function Home(props) {
  return (
    <div style={{ padding: "10px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.img}
          alt="Train Image"
          style={{ height: "10rem" }}
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">
            <a
              href={props.link}
              style={{ textDecoration: "none", color: "#ffff" }}
            >
              {props.buttonName}
            </a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
