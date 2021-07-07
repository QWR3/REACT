import './Pocemon.css'

import {Link} from 'react-router-dom'

export default function Pokemon({item: {name}, url}) {

    return (
        <div className={'pokemon'}>
            <h3>{name}</h3>

            <Link to={url + '/' + name}>
                <button className={'btn'}>about</button>
            </Link>
        </div>
    );
}
