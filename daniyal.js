import React, { Component } from "react";
import Logo from "./pic.png";
class Daniyal extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-3">
          <h1>Daniyal Ashraf 16-0167 React App</h1>
          <h2>Pic for you Sir</h2>
          <img src={Logo} alt="website logo" />
        </div>
      </div>
    );
  }
}
export default Daniyal;
