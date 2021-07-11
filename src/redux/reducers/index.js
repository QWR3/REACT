import {combineReducers} from "redux";
import {todosReducer} from "./todosReducer";
import {counterReducer} from "./counterReducer";

export const rootReducer=combineReducers({
    todosReducer,
    counterReducer
})