import {CREATE_PROJECT, FETCH_PROJECT, FETCH_PROJECTS} from "../actions/types";

const initialState = {
    projects: []
}

export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROJECTS:
            return {
                projects: action.payload
            }
        case FETCH_PROJECT:
            return Object.assign({}, state, {projects: action.payload})
        case CREATE_PROJECT:
            return {
                projects: [...state.projects, action.payload]
            }
        default:
            return state;
    }
}

