import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getTodos} from "../../services/API";
import Todo from "../todo/Todo";

import {setTodos, setLoading} from "../../redux/actionCreators"

export default function ListOfTodos(title, description) {
    const dispatch = useDispatch()
    const [todos, isLoading] = useSelector(({todosReducer: {todos, isLoading}}) => [todos, isLoading])

    useEffect(() => {
        try {
            dispatch(setLoading(true))
            getTodos.then(value => {
                dispatch(setTodos(value.data))
            }).then(() => dispatch(setLoading(false)))

        } catch (e) {
            console.log(e)
        }

    }, [])


    return (
        <div>
            {isLoading && <h2>LOADING...</h2>}
            {!isLoading && todos.map((value, index) => <Todo key={value.id||index} title={value.title}
                                                      description={value.description}/>)}
        </div>
    );
}