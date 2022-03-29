import React, { Component } from "react";
import Makebutton from "./Makebutton";
export default class DriveCar extends Component {
  constructor() {
    super();
    this.state = {
      gear: 1,
      accelerate: 10,
      setEmoji: "😄",
    };
  }
  applyBrake() {
    this.setState({
      gear: 0,
      accelerate: 0,
      setEmoji: "😏",
    });
  }

  componentDidUpdate() {
    if (this.state.accelerate === 100) {
      console.warn("component DID update");
      this.setState({
        accelerate: this.state.accelerate + 10,
        setEmoji: "😎",
      });
    } else if (this.state.accelerate > 110) {
      this.setState({
        accelerate: 10,
        setEmoji: "😄",
      });
    }
  }

  render() {
    console.warn("render");
    return (
      <>
        <h1>Life Cycles Methods</h1>
        <div style={{ marginLeft: "40rem" }}>
          <img
            src={
              this.state.gear === 0
                ? process.env.PUBLIC_URL + "/images/brakeCar.jpeg"
                : process.env.PUBLIC_URL + "/images/car-driving.gif"
            }
          />

          <div style={{ fontSize: "50px" }}>{this.state.setEmoji}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ textAlign: "center" }}>
            The speed is {this.state.accelerate}.
          </p>
          <Makebutton name="Apply Brake" data={() => this.applyBrake()} />
          <div style={{ marginLeft: "20px" }}>
            <Makebutton
              name="Drive Now"
              data={() =>
                this.setState({
                  gear: 2,
                  accelerate: this.state.accelerate + 10,
                  setEmoji: "😄",
                })
              }
            />
          </div>
        </div>
      </>
    );
  }
}
