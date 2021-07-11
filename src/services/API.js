import axios from "axios";
import {setLoading} from "../redux/actionCreators";

const url = "http://localhost:8888/";

const getTodos = axios.get(url + 'get-todos')
const postTodos = async (dispatch, title, description) => {
    dispatch(setLoading(true))
    try {
        return await axios.post(url + 'create-todo', {
            title: title,
            description: description
        })
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setLoading(false))
    }

}

export {getTodos, postTodos}