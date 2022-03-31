import React, { Component } from "react";
import HookCounter from "./HookCounter";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <div style={{ margin: "2rem 40rem", display: "flex" }}>
          <p>Using Class State (this.state) {"=>"}</p>
          <button onClick={() => this.incrementCount()}>
            Count {this.state.count}
          </button>
        </div>
        <div style={{ margin: "2rem 38rem", display: "flex" }}>
          <p>Using Function useState() hook{"=>"}</p>
          <HookCounter />
        </div>
      </div>
    );
  }
}

export default ClassCounter;
