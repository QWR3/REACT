import './Buttons.css';
import {Link} from 'react-router-dom'

export default function Buttons({page}) {
    let numberPage = Number(page)
    return (
        <div className={'btnFather'}>
            <div className={'buttons'}>
                {numberPage !== 1 && <Link to={'/page=' + (numberPage-1)}>
                    <button>previous</button>
                </Link>}
                {numberPage !== 34 && <Link to={'/page=' + (numberPage+1)}>
                    <button>next</button>
                </Link>}
            </div>
            <div className={'page'}>
                <h2>page {page}</h2>
            </div>
        </div>
    );
}