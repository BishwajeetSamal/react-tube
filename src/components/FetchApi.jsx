import React, { Component } from "react";
import { Table } from "react-bootstrap";
class FetchApi extends Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((resp) => {
        return resp.json();
      })
      .then((actualData) => {
        console.log(actualData.data);
        this.setState({ users: actualData.data });
      });
  }
  render() {
    return (
      <div>
        <h1>Fetch Api Data</h1>
        <div style={{ justifyContent: "center" }}>
          <Table>
            <thead>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </thead>
            <tbody>
              {this.state.users
                ? this.state.users.map((items) => (
                    <tr>
                      <td>{items.id}</td>
                      <td>
                        {items.first_name} {items.last_name}
                      </td>
                      <td> {items.email}</td>
                      <td>
                        <img src={items.avatar} />
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default FetchApi;
