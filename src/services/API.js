import axios from "axios";

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}
let axiosInstance = axios.create(options)
let getUsers = axiosInstance('users')
let getPosts = axiosInstance('posts')
let getComments = axiosInstance('comments')
let getCommentsToPost = (id) => axiosInstance(`comments?postId=${id}`)
let getPostsToUser = (id) => axiosInstance(`posts?userId=${id}`)
export {getUsers, getPosts, getComments, getCommentsToPost, getPostsToUser}