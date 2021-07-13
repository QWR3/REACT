import axios from "axios";

const api_key = "api_key=e6fc40e212e40758068c3bb4114f42ae"

const options = {
    baseURL: "https://api.themoviedb.org/3/"
}
const axiosInstance = axios.create(options)

const getMovies = (page) => axiosInstance(`/discover/movie?${api_key}&page=${page}`)
const getGenres = () => axiosInstance(`genre/movie/list?${api_key}`)
const getMovieInfo = (movie_id) => axiosInstance(`movie/${movie_id}?${api_key}&language=en-US`)

export {getMovies, getGenres, getMovieInfo}