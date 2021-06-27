import axios from "axios";
let options = {
    baseURL:'https://jsonplaceholder.typicode.com/'
}
let axiosInstance = axios.create(options);
let getPosts =()=>  axiosInstance('posts');
export {getPosts};