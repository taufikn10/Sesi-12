import React, { Component } from "react";
import FunctComp from "../FunctComp";
import FecthData from "./FecthData";
import Halu from "./Updating";

export default class Clock extends Component {
  //rconst
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <Halu />

        <h2>FecthData Class Component</h2>
        <FecthData />
        <h2>FecthData Function Component</h2>
        <FunctComp />
      </div>
    );
  }
}
