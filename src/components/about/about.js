import React, {Component} from "react";
import {Link} from "react-router-dom";

class AboutPage extends Component {
    render() {
        return (
            <div className="jumboton">
                <h1>Weather AboutPage</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt
                    accusamus iste veniam libero ut, qui eos cumque laudantium rem excepturi atque
                    et exercitationem quisquam incidunt dolorem nulla, officiis at?</p>
                <Link to="/home" className="btn btn-primary">Home</Link>
            </div>
        )
    }
}

export default AboutPage