import {createStore/* , applyMiddleware */ } from 'redux'
import rootReducer from '../reducers'
import {} from 'redux'

export default function configureStore(initialSate) {
    return createStore(
        rootReducer, 
        initialSate
    )
}