import {Link} from 'react-router-dom'

import './Header.css'
import {useDispatch, useSelector} from "react-redux";
import {setGenresVisibleFalse, setGenresVisibleTrue} from "../../redux/doGenresVisible";

export default function Header() {
    const dispatch = useDispatch()
    const doGenresVisible = useSelector(({doGenresVisible}) => doGenresVisible.value)

    const selector = doGenresVisible ? setGenresVisibleFalse() : setGenresVisibleTrue()

    return (
        <div className={"header"}>
            <Link to={'/'}>
                <img src="./logo.png" alt=""/>
            </Link>
            <form action="" className={"headerForm"}>
                <input type="text"/>
                <button><i className={'fas fa-search'}></i></button>
            </form>
            <button className={"btn"} onClick={() => dispatch(selector)}>Genres</button>
        </div>
    );
}