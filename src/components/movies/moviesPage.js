import React, {Component} from "react";
import {ToastContainer, toast} from "react-toastify";
import {connect} from 'react-redux'
import * as moviesAction from '../../actions/getMoviesAction'
import MovieMidware from '../../middleware/moviesMiddleware'

class MoviesPage extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            movies: ''
        }
    }

    movieRow(movie, index) {
        //This just like an adapter, dynamically adds rows with data
        return <p key={index}>Title:{movie.title}
            and Release Year: {movie.releaseYear}</p>
    }

    getMovie = () => {
        //console.log('hell: ',this.props)
        this.props.getData()
    }
    
    // <div>{this.props.courses.map(this.courseRow)}</div>
    render() {
        return (
            <div className="container jumbotron">
                <h1>Movies</h1>
                <div className="row">
                    <h2>Movies List</h2>
                    <button className="btn btn-primary" onClick={this.getMovie}>Get Movies</button>
                    <h2>Movies List:</h2>
                    <div>{this.props.movieData}</div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {movies: state}
}

function mapDispatchToProps(dispatch){
return {
    getData : ()=>{
        dispatch(MovieMidware.getMovie())
    }
}
}


export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
