import React, {Component} from "react";
import {Link} from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="jumboton">
        <h1>Weather Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt
          accusamus iste veniam libero ut, qui eos cumque laudantium rem excepturi atque
          et exercitationem quisquam incidunt dolorem nulla, officiis at?</p>
        <Link to="/about" className="btn btn-primary btn-lg">About</Link>
      </div>
    )
  }
}

export default HomePage