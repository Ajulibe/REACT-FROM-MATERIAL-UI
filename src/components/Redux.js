import React, { Component } from "react";
import { createStore } from "redux";

class Redux extends Component {
  render() {
    //
    const reducer = (state, action) => {
      if (action.type === "ATTACK") {
        return action.payload;
      }
      return state;
    };

    //
    const store = createStore(reducer, "peace");

    store.subscribe(() => {
      console.log("store", store.getState());
    });
    //
    //
    store.dispatch({
      type: "ATTACK",
      payload: "Iron woman"
    });

    return <div>test</div>;
  }
}

export default Redux;
