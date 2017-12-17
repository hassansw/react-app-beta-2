import {combineReducers} from 'redux'
import courses from './courseReducer'
import movies from './getMoviesReducer'

const rootReducer = combineReducers({
    courses,
    movies
})

export default rootReducer;