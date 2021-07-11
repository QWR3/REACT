import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postTodos} from "../../services/API";

import {setTodos, setLoading, addTodos} from "../../redux/actionCreators"

export default function Form() {
    const dispatch = useDispatch()
    const [todos, isLoading] = useSelector(({todosReducer: {todos, isLoading}}) => [todos, isLoading])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!title || !description || isLoading) return
        postTodos(dispatch, title, description).then(({data}) => {
            dispatch(addTodos({title: data.title, description: data.description, id:data.id}))
            console.log(data)
        })
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder={'title'} value={title}
                       onChange={({target: {value}}) => setTitle(value)}/>
                <br/>
                <input type="text" placeholder={'description'} value={description}
                       onChange={({target: {value}}) => setDescription(value)}/>
                <br/>
                <button type={'submit'} disabled={!title || !description || isLoading}>save</button>
            </form>
        </div>
    );
}