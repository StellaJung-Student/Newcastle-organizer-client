import axios from "axios";


export const BASE_SERVER_URL = "http://localhost:8080";
//export const BASE_SERVER_URL = 'https://fast-island-78566.herokuapp.com';


export default axios.create({
  baseURL: BASE_SERVER_URL,
  timeout: 100000,
  //credentials: 'include',
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
