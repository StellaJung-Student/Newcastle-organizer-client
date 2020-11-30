import {combineReducers} from "redux";
import {projectReducer} from "./projectReducer";
import {projectsReducer} from "./projectsReducer";

export default combineReducers({
    currentProject: projectReducer,
    currentProjects: projectsReducer
})