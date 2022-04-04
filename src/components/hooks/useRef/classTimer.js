import React, { Component } from "react";

class classTimer extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        Class Timer = {this.state.timer}
        <button
          onClick={() => clearInterval(this.interval)}
          style={{ display: "block", marginLeft: "46rem" }}
        >
          Clear Timer
        </button>
      </div>
    );
  }
}

export default classTimer;
