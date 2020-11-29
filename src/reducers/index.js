import {combineReducers} from "redux";
import {projectListReducer} from "./fetchProjectReducer";

export default combineReducers({
    currentProject: projectListReducer,
})