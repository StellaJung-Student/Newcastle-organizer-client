import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 100000,
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json'
    }
})