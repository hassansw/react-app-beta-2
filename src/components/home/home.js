import React, {Component} from "react";
// import {Link} from "react-router-dom";
//import {ToastContainer, toast} from 'react-toastify';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Weather Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt
          accusamus iste veniam libero ut, qui eos cumque laudantium rem excepturi atque
          et exercitationem quisquam incidunt dolorem nulla, officiis at?</p>
        {/*<Link to="/about" className="btn btn-primary">About</Link>*/}
        <button className="btn btn-primary">More Info</button>
      </div>
    )
  }
}

export default HomePage