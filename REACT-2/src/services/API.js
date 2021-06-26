import axios from 'axios';

let options = {
    baseURL: "https://jsonplaceholder.typicode.com/"
}
let axiosInstance = axios.create(options)

let getUsers = () => axiosInstance('users')
let getPosts = (id) => axiosInstance(`posts?userId=${id}`)

export {getUsers, getPosts}

