import React, { Component } from "react";

class Profile1 extends Component {
  testFunc() {
    alert("Working");
  }
  render() {
    return (
      <>
        <div>Check Profile 1 One</div>
        <button onClick={() => this.testFunc()}>Click Event</button>
      </>
    );
  }
}

export default Profile1;
