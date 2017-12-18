import * as ACTION_TYPES from '../actions/actionTypes'

const initialState = {
    course : false
}

export default function courseReducer(state = initialState, action){
    switch (action.type) {
        
        case ACTION_TYPES.CREATE_COURSE:
            return Object.assign({}, state, {action : action.course})

        
        default:
            return state
    }
}