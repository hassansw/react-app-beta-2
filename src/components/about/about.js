import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Msg = ({closeToast}) => (
  <div>
    <label >Lorem ipsum dolor</label>
  </div>
);

class AboutPage extends Component {

  showToast(){
      toast("7 Kingdoms", {autoClose: 15000})
    
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Weather AboutPage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          deserunt accusamus iste veniam libero ut, qui eos cumque laudantium
          rem excepturi atque et exercitationem quisquam incidunt dolorem nulla,
          officiis at?
        </p>
        <label onClick={() => toast(<Msg />)} className="btn btn-primary">More Info</label>
        <ToastContainer autoClose={8000} />
      </div>
    )
  }
}


export default AboutPage;
