import * as ACTION_TYPES from './actionTypes'

//This function is called an Action Creator
export function createCourse(course){
    return { type : ACTION_TYPES.CREATE_COURSE, course}
}