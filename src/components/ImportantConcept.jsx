import React, { Component } from "react";

export default class ImportantConcept extends Component {
  constructor() {
    super();
    console.warn("constructor");
  }
  //this calls when data gets ready
  componentDidMount() {
    console.warn("componentDidMount");
  }
  render() {
    console.warn("render");
    return <h1>Life Cycles Methods</h1>;
  }
}
