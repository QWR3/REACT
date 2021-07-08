import './Buttons.css'

import {Link} from 'react-router-dom'

export default function Buttons({page, url}) {
    const parsePage = parseInt(page)

    const [pagePlus, pageMinus] = [parsePage + 1, parsePage - 1]

    return (
        <div className={'buttons'}>
            <h2>Page {parsePage}</h2>

            {parsePage > 1 &&
            <Link to={url + pageMinus}>
                <button className={'btn'}>previous</button>
            </Link>}
            {parsePage < 23 &&
            <Link to={url + pagePlus}>
                <button className={'btn'}>next</button>
            </Link>}
        </div>
    );
}