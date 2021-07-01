import axios from "axios";
let options = {
    baseURL:'https://rickandmortyapi.com/api/'
}
let axiosInstance = axios.create(options)
let clearAxiosInstance = axios.create()
let getAllCharacters =(page=1)=> axiosInstance(`character/?page=${page}`)
let aboutCharacter =(id)=> axiosInstance(`character/${id}`)
let getLocation = (url)=>clearAxiosInstance(url)
let getEpisode = (url)=>clearAxiosInstance(url)
export {getAllCharacters, aboutCharacter, getLocation, getEpisode}