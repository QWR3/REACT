import axios from "axios";

const options = {
    baseURL: "https://api.themoviedb.org/3/"
}
const api_key = "api_key=e6fc40e212e40758068c3bb4114f42ae"

const axiosInstance = axios.create(options)

const getMovies =(page)=>axiosInstance(`/discover/movie?${api_key}&page=${page}`)
const getGenres = ()=>axiosInstance(`genre/movie/list?${api_key}`)

export {getMovies, getGenres}