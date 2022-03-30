import React from "react";
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Bishwajeet",
      email: "bishwajeet@gmail.com",
      show: true,
    };
  }
  updateState() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div>
        {this.state.show ? (
          <>
            <h1>Profile {this.state.name}</h1>
            <h1>Profile {this.state.email}</h1>
          </>
        ) : null}
        <button
          style={{
            marginLeft: "25%",
            color: "white",
            backgroundColor: "#007bff",
            cursor: "pointer",
            padding: "1rem",
            fontSize: "1rem",
            width: "10%",
            borderStyle: "none",
            borderRadius: "16px",
          }}
          onClick={() => {
            this.updateState();
          }}
        >
          Toggle me
        </button>
      </div>
    );
  }
}

export default Profile;
