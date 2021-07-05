import './Post.css'
import {
    Link
} from 'react-router-dom'

export default function Post({item: {id, title, body}, url, state}) {
    let postUrl = url + 'comments' + id
    return (
        <div className={'Post'}>
            <h3>{id}-{title}</h3>
            <p>{body}</p>
            <Link to={{pathname: postUrl, state: state}}>
                <button className={'btn'}>get comments</button>
            </Link>
        </div>
    );
}