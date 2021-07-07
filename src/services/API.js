import axios from "axios";

const options = {
    baseURL: "https://pokeapi.co/api/v2/"
}

const axiosInstance = axios.create(options)

const getPokemons = (offset) => axiosInstance(`pokemon?limit=50&offset=${offset}`)
const getPokemon = (name) => axiosInstance(`pokemon/${name}`)

export {getPokemons, getPokemon}