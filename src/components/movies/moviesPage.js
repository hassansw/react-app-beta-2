import React, {Component} from "react";
import {ToastContainer, toast} from "react-toastify";
import {connect} from 'react-redux'
import * as moviesAction from '../../actions/getMoviesAction'
import MovieMidware from '../../middleware/moviesMiddleware'

class MoviesPage extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            movies: '',
            MovieArray : [],
            movieMain : '',
            dxdData : 'First'
        }

        this.getMovie = this.getMovie.bind(this)
    }

   
    getMovie = () => {
        //console.log('hell: ',this.props)
        this.props.getData()
    }
    
    // <div>{this.props.movieData}</div>

    componentWillMount() {
        //Fired on Page Load

        setTimeout(()=>{
            console.log(this.state.MovieArray  , "stateeeeeeeeeeeee")
        }  , 600)


    }

    componentWillReceiveProps(prop){
        console.log(prop.PageProps.movieData.movies)
        this.setState({MovieArray : prop.PageProps.movieData.movies})
        this.setState({movieMain : prop.PageProps.movieData})
        this.setState({dxdData : 'Hell'})
       
    }

     movieRow(movie){
        //This just like an adapter, dynamically adds rows with data
        return (<p>Title:{movie.title} and Release Year: {movie.releaseYear}</p>)
    }


    render() {
        return (
            <div className="container jumbotron">
                <h1>Movies</h1>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.getMovie}>Get Movies</button>
                    <h2>Movies List:</h2>
                    <p>{this.dxdData}</p>
                     <div>{this.state.MovieArray[0]}</div>
                </div>  
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { PageProps: state }
}

function mapDispatchToProps(dispatch){
    return {
        getData : ()=> {
            dispatch(MovieMidware.getMovie())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
