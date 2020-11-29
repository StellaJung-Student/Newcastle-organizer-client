import {CREATE_TASK} from "../actions/types";

export const taskReducer = (state = {}, action) => {
    switch (action.type){
        case CREATE_TASK:
            return {}
    }
    return state
}