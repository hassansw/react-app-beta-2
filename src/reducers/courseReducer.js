import * as ACTION_TYPES from '../actions/actionTypes'

export default function courseReducer(state = [], action){
    switch(action.type){
        case ACTION_TYPES.CREATE_COURSE:
            return [...state,
                Object.assign({}, action.course)
            ]
        
        default:
            return state
    }
}