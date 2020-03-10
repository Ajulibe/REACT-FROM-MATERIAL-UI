import React, { Component } from "react";

class Usergreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>WLecome Vishwas</div>
    ) : (
      <div>Welcome Guests</div>
    );
  }
}

export default Usergreeting;
