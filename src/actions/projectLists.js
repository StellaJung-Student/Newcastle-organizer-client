import {
    CREATE_PROJECT_LIST,
    CREATE_TASK,
    DELETE_PROJECT_LIST,
    DELETE_TASK,
    EDIT_PROJECT_LIST,
    FETCH_PROJECT_LISTS,
    MOVE_TASK
} from "./types";
import axios from '../api/server'


export const fetchProjectLists = (projectId) => async dispatch => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    try {
        const response = await axios.get(`/api/projects/${projectId}/projectLists`, config);
        dispatch({type: FETCH_PROJECT_LISTS, payload: response.data});
    } catch (e) {
        console.log(e)
    }
}

export const createProjectList = (newProjectList, projectId) => async dispatch => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    try {
        const response = await axios.post(`/api/projects/${projectId}/projectLists`, newProjectList, config);
        Object.assign(newProjectList, {id: response.data.id});
        dispatch({type: CREATE_PROJECT_LIST, payload: newProjectList})
    } catch (e) {
        console.log(e)
    }
}

export const editProjectList = (projectList) => async dispatch => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    try {
        await axios.patch('/api/projects/1/projectLists', projectList, config);
        dispatch({type: EDIT_PROJECT_LIST, payload: projectList})
    } catch (e) {
        console.log(e)
    }
}

export const deleteProjectList = (id) => async dispatch => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    try {
        await axios.delete(`/api/projects/1/projectLists/${id}`, config);
        dispatch({type: DELETE_PROJECT_LIST, payload: id})
    } catch (e) {
        console.log(e)
    }
}

export const createNewTask = (projectListId, newTask) => async dispatch => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    try {
        const response = await axios.post(`/api/projectLists/${projectListId}/tasks`, newTask, config);
        const deadlineDate = newTask.deadlineDate.getFullYear() + '-' + newTask.deadlineDate.getMonth() + '-' + newTask.deadlineDate.getDate()
        Object.assign(newTask, {id: response.data.id, deadlineDate: deadlineDate})
        dispatch({
            type: CREATE_TASK, payload: {
                projectListId,
                newTask
            }
        })
    } catch (e) {
        console.log(e)
    }
}

export const deleteTask = (projectListId, taskId) => async dispatch => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    try {
        await axios.delete(`/api/projectLists/${projectListId}/tasks/${taskId}`, config);
        dispatch({
            type: DELETE_TASK, payload: {
                projectListId,
                taskId
            }
        })
    } catch (e) {
        console.log(e)
    }
}

export const moveTask = (newProjectListId, task, listsObjects) => async dispatch => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    try {
        await axios.post(`/api/projectLists/${newProjectListId}/tasks`, task, config);
        dispatch({
            type: MOVE_TASK, payload: listsObjects
        })
    } catch (e) {
        console.log(e)
    }
}