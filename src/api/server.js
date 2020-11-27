import axios from 'axios'

export default axios.create({
    baseURL: 'https://fast-island-78566.herokuapp.com/api',
    timeout: 100000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})