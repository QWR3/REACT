import './Page.css'

import {useDispatch, useSelector} from "react-redux";
import {nextPage, previewPage} from "../../redux/page";

export default function Page() {
    const page = useSelector(({page}) => page.value)
    const dispatch = useDispatch()
    return (
        <div className={'page'}>
            <button disabled={page < 2} onClick={() =>
                dispatch(previewPage())
            } className={'btn'}>preview
            </button>

            <h3>Page {page}</h3>

            <button onClick={() =>
                dispatch(nextPage())
            } className={'btn'}>next
            </button>

        </div>
    );
}