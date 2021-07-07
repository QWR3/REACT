import './Buttons.css'

import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux";

export default function Buttons({page, url}) {
    const parsePage = parseInt(page)

    const [pagePlus, pageMinus] = [parsePage + 1, parsePage - 1]
    const dispatch = useDispatch()

    const setPage = () => {
        dispatch({type: "SET_PAGE", payload: parsePage})
    }
    return (
        <div className={'buttons'}>
            <h2>Page {parsePage}</h2>

            {parsePage > 1 &&
            <Link to={url + pageMinus}>
                <button className={'btn'} onClick={setPage}>previous</button>
            </Link>}
            {parsePage < 23 &&
            <Link to={url + pagePlus}>
                <button className={'btn'} onClick={setPage}>next</button>
            </Link>}
        </div>
    );
}