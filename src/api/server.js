import axios from 'axios'

export const BASE_SERVER_URL = 'https://fast-island-78566.herokuapp.com';

export default axios.create({
    baseURL:
    //'http://localhost:8080',
    BASE_SERVER_URL,
    timeout: 100000,
    //credentials: 'include',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})