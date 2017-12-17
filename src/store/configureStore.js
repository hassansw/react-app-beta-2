import {createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

let middleware = applyMiddleware(thunk)


export default function configureStore(initialSate) {
    return createStore(
        rootReducer,
        initialSate, middleware
    )
}