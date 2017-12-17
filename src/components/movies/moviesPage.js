import React, { Component } from "react";
import {ToastContainer, toast} from "react-toastify";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


class MoviesPage extends Component {
    render(){
        return(
            <div className="container jumbotron">
                <h1>Movies</h1>
                <div className="row">
                    <h2>Movies List</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ea perferendis iste, commodi nobis earum ducimus repudiandae neque! Qui nisi placeat eius pariatur voluptatem illum quaerat repudiandae, totam et temporibus.</p>
                </div>
            </div>
        )
    }
}

export default MoviesPage
