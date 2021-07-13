import {Link} from 'react-router-dom'

import './Header.css'
import {useDispatch, useSelector} from "react-redux";
import {setGenresVisibleFalse, setGenresVisibleTrue} from "../../redux/doGenresVisible";
import {useEffect, useState} from "react";

export default function Header() {
    const dispatch = useDispatch()
    const doGenresVisible = useSelector(({doGenresVisible}) => doGenresVisible.value)

    const selector = doGenresVisible ? setGenresVisibleFalse() : setGenresVisibleTrue()

    const [input, setInput]= useState()
    const [search, setSearch]= useState()

    const onChange =(e)=>{
        setInput(e.target.value)
    }
    const onInput=(e)=>{
        e.preventDefault()
        setSearch(input)
    }

    return (
        <div className={"header"}>
            <Link to={'/'}>
                <img src="./logo.png" alt=""/>
            </Link>
            <form action="" className={"headerForm"} onInput={onInput}>
                <input type="text" name={"input"} value={input} onChange={onChange}/>
                <button><i className={'fas fa-search'}></i></button>
            </form>
            <button className={"btn"} onClick={() => dispatch(selector)}>Genres</button>
        </div>
    );
}