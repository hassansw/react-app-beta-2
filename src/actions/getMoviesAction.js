import * as ACTION_TYPES from './actionTypes'
import getMoviesAPI from '../middleware/moviesMiddleware'


export function loadMoviesSuccess(movies) {
    return { type : ACTION_TYPES.LOAD_MOVIES_SUCCESS, movies}
}
//This function is called an Action Creator
export function loadMovies(movies) {
    return function(dispatch) {

        console.log('i was here')
        return getMoviesAPI.getMoviesData().then( movies => {
            dispatch(loadMoviesSuccess(movies))
        }).catch(error => {
            throw error
        })
    }
}