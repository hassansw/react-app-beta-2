import React, { Component } from "react";
import {ToastContainer, toast} from "react-toastify";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as moviesAction from '../../actions/getMoviesAction'



class MoviesPage extends Component {
    
    constructor(props, context) {
        super(props, context)
         this.state = {
            movies : ''
        }
    }

    movieRow(movie, index) {
        //This just like an adapter, dynamically adds rows with data
        return <p key={index}>Title:{movie.title} and Release Year: {movie.releaseYear}</p>
    }

    render(){
        return(
            <div className="container jumbotron">
                <h1>Movies</h1>
                <div className="row">
                    <h2>Movies List</h2>
                    <div>{this.props.movies}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {movies: state.movies}
}

function mapDispatchToProps(dispatch) {
    return {
        // createCourse: course => dispatch(courseAction.createCourse(course))
        actions: bindActionCreators(moviesAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
