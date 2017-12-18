import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {combineReducers} from 'redux'
import courses from '../reducers/courseReducer'
import MovieReducer from '../reducers/getMoviesReducer'

let middleware = applyMiddleware(thunk)

// const rootReducer = combineReducers({courses, movies})

const store = createStore(MovieReducer, middleware)

store.subscribe(() => {
    console.log("store state", store.getState())
})

export default store