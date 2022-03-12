import React, { Component } from "react";

export default class Halu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      users: [],
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.users.length !== nextState.users.length) {
      return true;
    }
    return false;
  }

  render() {
    return <div>Updating</div>;
  }
}
