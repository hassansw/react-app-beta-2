import * as ACTION_TYPES from '../actions/actionTypes'

export default function courseReducer(state = [], action) {
    switch (action.type) {
        
        case ACTION_TYPES.LOAD_MOVIES_SUCCESS:
            return action.movies

        default:
            return state
    }
}