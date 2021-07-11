import {SET_TODOS, ADD_TODOS, SET_LOADING} from "../actionTypes"

export const setTodos = (payload) => ({type: SET_TODOS, payload})
export const addTodos = (payload) => ({type: ADD_TODOS, payload})
export const setLoading = (payload) => ({type: SET_LOADING, payload})
