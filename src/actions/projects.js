import axios from '../api/server'
import {CREATE_PROJECT, FETCH_PROJECTS} from "./types";


export const fetchProjects = () => async dispatch => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    try {
        const response = await axios.get('/api/user/projects', config);
        dispatch({type: FETCH_PROJECTS, payload: response.data});
    } catch (e) {
        console.log(e)
    }
}


export const createProject = (project) => async dispatch => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    try {
        const response = await axios.post('/api/projects', project, config);
        const newProject = {...project, id: response.data.id}
        console.log(project)
        console.log(newProject)

        dispatch({type: CREATE_PROJECT, payload: newProject});
    } catch (e) {
        console.log(e)
    }
}