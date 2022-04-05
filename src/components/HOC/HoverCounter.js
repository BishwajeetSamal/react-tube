import React, { Component } from "react";
import UpdateComponent from "./withCounter";
class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevCount) => {
      return { count: prevCount.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <h2 onMouseOver={this.incrementCount}>
        {this.props.name} Hovered {count} times
      </h2>
    );
  }
}
export default UpdateComponent(HoverCounter);
