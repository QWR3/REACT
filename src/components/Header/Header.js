import './Header.css'
import {useDispatch, useSelector} from "react-redux";
import {setGenresVisibleFalse, setGenresVisibleTrue} from "../../redux/doGenresVisible";

export default function Header() {
    const dispatch = useDispatch()
    const doGenresVisible = useSelector(({doGenresVisible})=>doGenresVisible.value)

    const selector = doGenresVisible?setGenresVisibleFalse():setGenresVisibleTrue()

    return (
        <div className={"header"}>
            <img src="./logo.png" alt=""/>
            <form action="" className={"headerForm"}>
                <input type="text"/>
                <button><i className={'fas fa-search'}></i></button>
            </form>
            <button className={"btn"} onClick={()=>dispatch(selector)}>Genres</button>
        </div>
    );
}