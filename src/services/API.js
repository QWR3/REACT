import axios from "axios";

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}
let axiosInstance = axios.create(options)
let getUsers = axiosInstance('users')
let getPosts = axiosInstance('posts')
let getComments = axiosInstance('comments')
export {getUsers, getPosts, getComments}