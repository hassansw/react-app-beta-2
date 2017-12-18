import MovieAction from "../actions/getMoviesAction"

const initialState = {
    getMovie: false,
    movieData: []
}

function MovieReducer(state = initialState, action) {
    switch (action.type) {

        case MovieAction.movieAct:
            return Object.assign({}, state, {
                getMovie: true,
                movieData: action.data
            })

        default:
            return state

    }
}

export default MovieReducer